import type {
  CompanyInfo as CompanyInfoType,
  Logos as LogosType,
  Page as PageType,
} from 'lib/schema'

declare global {
  interface PageTemplateProps {
    logos: LogosType
    companyInfo: CompanyInfoType
    page: PageType
  }

  interface LayoutProps {
    logos: LogosType
    companyInfo: CompanyInfoType
    children?: ReactNode
    contact?: boolean
    inner?: boolean
  }
}
