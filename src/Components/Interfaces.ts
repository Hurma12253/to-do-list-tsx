export interface ITodo{
    title: string
    id: number
    achieved: boolean
  }

export interface IThemes{
  default: any
  light: any
  dark: any
  [key: string]: any
}
  