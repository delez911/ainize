// 获取DiEAvatar.md文件内容
async function fetchMarkdownContent() {
    try {
        const response = await fetch('/data/DiEAvatar.md');
        if (!response.ok) {
            throw new Error('无法加载Markdown文件');
        }
        return await response.text();
    } catch (error) {
        console.error('加载Markdown文件失败:', error);
        return '# 加载失败\n\n无法加载Markdown内容，请检查文件路径。';
    }
}

// 解析Markdown内容为幻灯片
function parseMarkdownToSlides(markdown) {
    // 使用 --- 分隔符拆分幻灯片
    const slideContents = markdown.split(/^---$/m);
    
    // 处理第一个幻灯片（可能包含YAML前置内容）
    let slides = [];
    if (slideContents.length > 0) {
        // 第一个元素可能包含YAML前置内容，我们需要特殊处理
        const firstSlide = slideContents[0].trim();
        if (firstSlide.startsWith('---')) {
            // 有YAML前置内容，需要跳过YAML部分
            const yamlEndIndex = firstSlide.indexOf('---', 3);
            if (yamlEndIndex !== -1) {
                const content = firstSlide.substring(yamlEndIndex + 3).trim();
                if (content) slides.push(content);
            }
        } else {
            // 没有YAML前置内容
            if (firstSlide) slides.push(firstSlide);
        }
        
        // 添加其余幻灯片，但跳过空白幻灯片
        for (let i = 1; i < slideContents.length; i++) {
            const content = slideContents[i].trim();
            // 检查是否包含布局指令但没有其他内容
            const isOnlyLayout = /^layout: .+\s*$/.test(content);
            if (content && !isOnlyLayout) {
                slides.push(content);
            }
        }
    }
    
    return slides;
}

// 使用Marked.js进行Markdown到HTML转换
function convertMarkdownToHTML(markdown) {
    // 配置Marked选项
    marked.setOptions({
        breaks: true,
        gfm: true
    });
    
    // 处理布局指令 - 在Markdown解析前提取布局信息
    let layoutInfo = '';
    const layoutMatch = markdown.match(/^layout: (.+)$/m);
    if (layoutMatch) {
        const layoutType = layoutMatch[1].trim();
        layoutInfo = `<div class="layout" data-layout="${layoutType}">`;
        // 从Markdown中移除布局指令行
        markdown = markdown.replace(/^layout: .+$/m, '');
    }
    
    // 处理类指令
    let classInfo = '';
    const classMatch = markdown.match(/^class: ['"]?(.*?)['"]?$/m);
    if (classMatch) {
        const className = classMatch[1].trim();
        classInfo = `<div class="custom-class" data-class="${className}">`;
        // 从Markdown中移除类指令行
        markdown = markdown.replace(/^class: ['"]?(.*?)['"]?$/m, '');
    }
    
    // 移除其他YAML样式的指令，避免它们显示为普通文本
    markdown = markdown.replace(/^[a-zA-Z]+: .+$/gm, '');
    
    // 使用DOMPurify清理HTML以防止XSS攻击
    let html = DOMPurify.sanitize(marked.parse(markdown));
    
    // 添加布局和类包装
    if (layoutInfo) {
        html = `${layoutInfo}${html}</div>`;
    }
    
    if (classInfo) {
        html = `${classInfo}${html}</div>`;
    }
    
    return html;
}

// 创建幻灯片HTML
function createSlideElements(slideContents) {
    const slideContainer = document.querySelector('.slide-container');
    slideContainer.innerHTML = ''; // 清空容器
    
    // 添加布局切换按钮
    const layoutSwitch = document.createElement('div');
    layoutSwitch.className = 'layout-switch';
    layoutSwitch.style.cssText = 'display: flex; justify-content: center; gap: 1rem; margin: 1rem 0;';
    layoutSwitch.innerHTML = `
        <a href="#slide" class="layout-btn active">幻灯片模式</a>
        <a href="#grid" class="layout-btn">平铺模式</a>
    `;
    slideContainer.appendChild(layoutSwitch);
    
    // 为每个幻灯片内容创建幻灯片元素
    slideContents.forEach((content, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.id = `slide-${index + 1}`;
        if (index === 0) slide.classList.add('active');
        
        // 使用convertMarkdownToHTML处理内容
        slide.innerHTML = convertMarkdownToHTML(content);
        
        slideContainer.appendChild(slide);
    });
    
    return slideContainer.querySelectorAll('.slide');
}

// 初始化幻灯片
async function initSlides() {
    const markdown = await fetchMarkdownContent();
    const slideContents = parseMarkdownToSlides(markdown);
    const slides = createSlideElements(slideContents);
    
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageInfo = document.getElementById('pageInfo');
    const footer = document.querySelector('.footer');
    const layoutBtns = document.querySelectorAll('.layout-btn');
    const slideContainer = document.querySelector('.slide-container');
    let currentSlideIndex = 0;
    const totalSlides = slides.length;
    
    // 更新页码信息
    function updatePageInfo() {
        pageInfo.textContent = `第 ${currentSlideIndex + 1} / ${totalSlides} 页`;
    }
    
    // 显示指定幻灯片
    function showSlide(index) {
        // 确保索引在有效范围内
        if (index < 0) {
            index = 0;
        } else if (index >= totalSlides) {
            index = totalSlides - 1;
        }
        
        // 隐藏所有幻灯片
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            // 确保在幻灯片模式下，只有当前幻灯片显示
            if (slideContainer.dataset.layoutMode !== 'grid') {
                slide.style.display = 'none'; 
                slide.style.opacity = '0';
            }
        });
        
        // 显示目标幻灯片 (仅在幻灯片模式下)
        if (slideContainer.dataset.layoutMode !== 'grid') {
            slides[index].style.display = 'flex'; // 使用flex保持内容居中
            slides[index].classList.add('active');
            slides[index].style.opacity = '1';
        }
        
        currentSlideIndex = index;
        updatePageInfo();
        
        // 更新按钮状态
        prevBtn.disabled = currentSlideIndex === 0;
        nextBtn.disabled = currentSlideIndex === totalSlides - 1;
    }
    
    // 上一页按钮事件
    prevBtn.addEventListener('click', () => {
        if (currentSlideIndex > 0) {
            slides[currentSlideIndex].classList.remove('active');
            currentSlideIndex--;
            showSlide(currentSlideIndex);
        }
    });
    
    // 下一页按钮事件
    nextBtn.addEventListener('click', () => {
        if (currentSlideIndex < totalSlides - 1) {
            slides[currentSlideIndex].classList.remove('active');
            currentSlideIndex++;
            showSlide(currentSlideIndex);
        }
    });
    
    // 布局切换事件
    layoutBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const layout = btn.getAttribute('href').substring(1); // 'slide' or 'grid'
            
            layoutBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            slideContainer.dataset.layoutMode = layout; // 记录当前模式
            
            if (layout === 'grid') {
                // --- 平铺模式 ---
                document.body.classList.add('grid-layout');
                slideContainer.style.display = 'block';
                slideContainer.style.aspectRatio = 'auto';
                slideContainer.style.overflowY = 'visible';
                slideContainer.style.height = 'auto';
                slideContainer.style.paddingBottom = '2rem';
                
                slides.forEach(slide => {
                    slide.style.display = 'flex';
                    slide.style.opacity = '1';
                    slide.style.marginBottom = '1.5rem';
                    slide.style.height = 'auto';
                    slide.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                    slide.classList.remove('active');
                });
                
                footer.style.display = 'none';
                document.body.style.alignItems = 'flex-start';
                document.documentElement.style.overflowY = 'auto';
                document.body.style.overflowY = 'auto';
                document.body.style.height = '100%';
                document.body.style.minHeight = '100%';
            } else {
                // --- 幻灯片模式 ---
                document.body.classList.remove('grid-layout');
                slideContainer.style.display = 'flex';
                slideContainer.style.aspectRatio = '16 / 9';
                slideContainer.style.overflow = 'hidden';
                slideContainer.style.overflowY = 'hidden';
                slideContainer.style.height = '';
                slideContainer.style.paddingBottom = '';
                
                slides.forEach(slide => {
                    slide.style.marginBottom = '';
                    slide.style.height = '';
                    slide.style.boxShadow = '';
                });
                
                footer.style.display = 'flex';
                document.body.style.alignItems = 'center';
                document.documentElement.style.overflowY = '';
                document.body.style.overflowY = '';
                document.body.style.height = '';
                showSlide(currentSlideIndex);
            }
        });
    });
    
    // 初始化
    updatePageInfo();
    
    // 默认使用平铺模式
    document.body.classList.add('grid-layout');
    slideContainer.style.display = 'block';
    slideContainer.style.aspectRatio = 'auto';
    slideContainer.style.overflowY = 'visible';
    slideContainer.style.height = 'auto';
    slideContainer.style.paddingBottom = '2rem';
    
    slides.forEach(slide => {
        slide.style.display = 'flex';
        slide.style.opacity = '1';
        slide.style.marginBottom = '1.5rem';
        slide.style.height = 'auto';
        slide.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        slide.classList.remove('active');
    });
    
    footer.style.display = 'none';
    document.body.style.alignItems = 'flex-start';
    document.documentElement.style.overflowY = 'auto';
    document.body.style.overflowY = 'auto';
    document.body.style.height = '100%';
    document.body.style.minHeight = '100%';
    
    // 检查URL哈希值，如果是#slide则切换到幻灯片模式
    if (window.location.hash === '#slide') {
        document.querySelector('[href="#slide"]')?.click();
    } else {
        showSlide(currentSlideIndex);
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initSlides);
