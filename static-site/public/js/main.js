document.addEventListener('DOMContentLoaded', async function() {
  try {
    // Load sections data from JSON file
    const response = await fetch('/data/sections.json');
    const sections = await response.json();
    
    // Get the sections container
    const sectionsContainer = document.getElementById('sections');
    
    // Process each section
    for (const section of sections) {
      // Create section div
      const sectionDiv = document.createElement('div');
      sectionDiv.id = section.id;
      sectionDiv.className = 'section';
      
      // Add title
      const title = document.createElement('h2');
      title.textContent = section.title;
      sectionDiv.appendChild(title);
      
      // Load and add content
      try {
        const contentResponse = await fetch(section.contentFile);
        const contentHtml = await contentResponse.text();
        
        const content = document.createElement('div');
        content.className = 'content';
        content.innerHTML = contentHtml;
        sectionDiv.appendChild(content);
      } catch (error) {
        console.error(`Error loading content for section ${section.id}:`, error);
        
        const errorMsg = document.createElement('p');
        errorMsg.className = 'error';
        errorMsg.textContent = `Failed to load content for this section.`;
        sectionDiv.appendChild(errorMsg);
      }
      
      // Add section to container
      sectionsContainer.appendChild(sectionDiv);
    }
  } catch (error) {
    console.error('Error loading sections:', error);
    
    const errorMsg = document.createElement('div');
    errorMsg.className = 'error-message';
    errorMsg.textContent = 'Failed to load sections data. Please try again later.';
    
    const sectionsContainer = document.getElementById('sections');
    sectionsContainer.appendChild(errorMsg);
  }
});
