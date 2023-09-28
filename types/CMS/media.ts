export interface Media {
  id?: string
  createDate?: string
  updateDate?: string
  level?: number
  mediaTypeAlias?: string
  umbracoHeight?: string
  umbracoWidth?: string
  name: string
  parent?: Media
  sortOrder?: number
  url: string
}
