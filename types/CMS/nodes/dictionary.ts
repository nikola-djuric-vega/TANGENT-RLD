export interface DictionaryItem {
  id: string
  name: string
  phrase: string
}

export interface AllDictionaryItems {
  [key: string]: {
    items: DictionaryItem[]
  }
}
