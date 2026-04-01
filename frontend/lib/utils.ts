import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Resolve public asset URL with basePath (for static export deployment). */
export function getPublicUrl(path: string): string {
  if (!path) return ""
  
  // If it's an external URL, return as is
  if (path.startsWith('http')) return path
  
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ""
  
  // Ensure path starts with / but not duplicated
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  
  // Avoid double base path if it's already there
  if (base && normalizedPath.startsWith(base)) {
      return normalizedPath
  }
  
  return base + normalizedPath
}
