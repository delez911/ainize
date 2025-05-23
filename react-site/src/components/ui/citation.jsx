import React from 'react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const CitationLink = ({ 
  id, 
  callType = 'reference', 
  citations = {}, 
  className,
  onClick 
}) => {
  const citation = citations[id]
  
  return (
    <Popover>
      <PopoverTrigger asChild>
        <span
          className={cn(
            "cursor-pointer text-blue-600 hover:text-blue-800 hover:underline",
            className
          )}
          onClick={() => onClick?.(id, callType)}
        >
          {callType === 'quote' ? `"${id}"` : `[${id}]`}
        </span>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">{citation?.title || `Reference ${id}`}</h4>
          <p className="text-sm text-muted-foreground">{citation?.content}</p>
          {citation?.url && (
            <a 
              href={citation.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              {citation.siteName || 'Source'}
            </a>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export { CitationLink } 