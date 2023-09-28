export interface EmailSettings {
  emailBody: string
  emailSubject: string
  excludeReference: boolean
  excludeSubmissionData: boolean
  excludeFromEmail: string[]
  fromEmail: string
  toEmail: string
}

export interface BackEndEmailSettings {
  to: string
  from: string
  subject: string
  body: string
  // excludeReference: boolean
  // excludeSubmissionData: boolean
}
