export type FilterbyTextSearch = (
  e:
    | React.KeyboardEvent<HTMLInputElement>
    | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  router: any,
  slug: string | string[] | undefined
) => void
