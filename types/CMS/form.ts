import { IconNames, Option, SmartMeterSubmitData } from '_types/local'
import { BackEndEmailSettings } from './compositions'
import { CompositionTypeNames } from '.'
import { CmsPage } from './base'

export interface FormConditionRule {
  field: string
  operator: FormConditionRuleOperatorType
  value: string | null
}

export interface FormItemsType {
  notAvailableData?: NotAvailableData
  smartMeterData?: SmartMeterOverlayType
  timeSlots?: TimeSlots
  completedPages: number[]
  activePage: number
  pages: FormPage[]
  isSmart: boolean
}

export interface FormState {
  smartMeter?: SmartMeterSubmitData
  completedPages: number[] | []
  blockSubmission?: boolean
  pingedOccured?: boolean
  correlationID?: string
  shouldRetry?: boolean
  pingAttempts: number
  activePage: number
  pages: FormPage[]
  isDS1?: boolean
}
export interface TimeSlots {
  Tomorrow: FromTo
  Today: FromTo
}
export interface FromTo {
  from: Option[]
  until: Option[]
}

export interface NotAvailableData {
  intro?: string
  text?: string
  title: string
  telephoneNumber1?: string
  telephoneNumber2?: string
}

export interface SmartMeterOverlayType {
  smartMeterSubtitle?: string
  smartMeterBodyText?: string
  smartMeterTitle: string
  smartMeterIcon?: IconNames
}

export enum FormConditionRuleOperatorType {
  IS = 'IS',
  IS_NOT = 'IS_NOT',
  GREATER_THEN = 'GREATER_THEN',
  LESS_THEN = 'LESS_THEN',
  CONTAINS = 'CONTAINS',
  STARTS_WITH = 'STARTS_WITH',
  ENDS_WITH = 'ENDS_WITH',
}

export interface FormCondition {
  actionType: FormConditionActionType
  logicType: FormConditionLogicType
  rules: FormConditionRule[]
}

export enum FormButton {
  PREVIOUS = 'previousButton',
  SUBMIT = 'submitButton',
  NEXT = 'nextButton',
}

export enum FormType {
  REPORT_POWER_CUT = 'PowerCutFormPage',
  PSR = 'PSRFormPage',
}

export enum FormConditionLogicType {
  ALL = 'ALL',
  ANY = 'ANY',
}

export enum FormConditionActionType {
  SHOW = 'SHOW',
  HIDE = 'HIDE',
}

export enum FormCustomFields {
  CUSTOM_BUTTON = 'Button',
  FILE_UPLOAD = 'fileUpload',
  ADDRESS_CARD = 'addressCard',
  POSTCODE_LOOKUP = 'postcodeLookup',
  POSTCODE_LOOKUP_ALLOW = 'postcodeLookupAllow',
  POSTCODE_LOOKUP_MANUAL = 'postcodeLookupManual',
  POSTCODE_LOOKUP_MANUAL_DNO = 'postcodeLookupManualDno',
  FILE_UPLOAD_MULTIPLE = 'fileUploadMultiple',
  APPOINTMENT_PICKER = 'appointmentPicker',
  DATE_PICKER = 'datePicker',
  DATE_PICKER_ALLOW_WEEKENDS = 'datePickerAllowWeekends',
  PAST_DATE_PICKER = 'pastDatePicker',
  HISTORIC_DATE_PICKER = 'historicDatePicker',
  MULTI_EMAIL = 'multiEmail',
  LOCATION_FIELDS = 'locationFields',
  FORM_REPEATER = 'assetFormRepeater',
  REPRESENTATIVE_FORM_REPEATER = 'representativeFormRepeater',
  STREET_FORM_REPEATER = 'streetAssetFormRepeater',
  UNMETERED_FORM_REPEATER = 'unmeteredAssetFormRepeater',
  NOT_AVAILABLE = 'notAvailable',
  RADIO_BUTTONS_WITH_IMAGES = 'radioButtonsWithImages',
  RADIO_BUTTONS_WITH_MAIN_IMAGE = 'radioButtonsWithMainImage',
  POWER_CUT_CHECKS = 'powerCutChecks',
}

export enum PostcodeLookups {
  POSTCODE_LOOKUP = 'postcodeLookup',
  POSTCODE_LOOKUP_ALLOW = 'postcodeLookupAllow',
  POSTCODE_LOOKUP_MANUAL = 'postcodeLookupManual',
  POSTCODE_LOOKUP_MANUAL_DNO = 'postcodeLookupManualDno',
}

export interface FormFieldBase {
  caption: string
  alias: string
  required: boolean
  requiredErrorMessage?: string
  settings: {
    defaultValue: string | FormCustomFields
    DefaultValue: string | FormCustomFields
    pattern?: string
    patternInvalidErrorMessage?: string
    showLabel: string
    ShowLabel: string
  }
  type: FieldType
  helpText?: string
  condition?: FormCondition
}

export interface FormFieldConsent extends FormFieldBase {
  settings: {
    defaultValue: string
    DefaultValue: string
    pattern?: string
    patternInvalidErrorMessage?: string
    acceptCopy?: string
    AcceptCopy?: string
    showLabel: string
    ShowLabel: string
  }
  type: FieldType.DATA_CONSENT
}

export interface FormFieldText extends FormFieldBase {
  settings: {
    pattern?: string
    patternInvalidErrorMessage?: string
    defaultValue: string
    DefaultValue: string
    showLabel: string
    ShowLabel: string
  }
  type: FieldType.TEXT
}

export interface FormFieldTextarea extends FormFieldBase {
  settings: {
    pattern?: string
    patternInvalidErrorMessage?: string
    defaultValue: string
    DefaultValue: string
    showLabel: string
    ShowLabel: string
  }
  type: FieldType.TEXTAREA
}

export interface FormFieldCheckbox extends FormFieldBase {
  settings: {
    pattern?: string
    patternInvalidErrorMessage?: string
    defaultValue: string
    DefaultValue: string
    showLabel: string
    ShowLabel: string
  }
  type: FieldType.CHECKBOX
}

export interface FormFieldPassword extends FormFieldBase {
  settings: {
    pattern?: string
    patternInvalidErrorMessage?: string
    defaultValue: string
    DefaultValue: string
    showLabel: string
    ShowLabel: string
  }
  type: FieldType.PASSWORD
}

export interface FormFieldCheckboxList extends FormFieldBase {
  preValues: string[]
  type: FieldType.CHECKBOX_LIST
}

export interface FormFieldSelect extends FormFieldBase {
  preValues: string[]
  type: FieldType.SELECT
}

export interface FormFieldRadio extends FormFieldBase {
  preValues: string[]
  type: FieldType.RADIO
}

export interface FormFieldTitleDescription extends FormFieldBase {
  settings: {
    patternInvalidErrorMessage?: string
    pattern?: string
    defaultValue: string
    DefaultValue: string
    caption?: string
    Caption?: string
    bodyText?: string
    BodyText?: string
    showLabel: string
    ShowLabel: string
  }
  type: FieldType.TITLE_AND_DESCRIPTION
}

export interface FormFieldDate extends FormFieldBase {
  type: FieldType.DATE
}

export interface FormFieldReCaptcha extends FormFieldBase {
  type: FieldType.RECAPTCHA
}

export interface FormFieldHidden extends FormFieldBase {
  alias: string | FormCustomFields
  settings: {
    defaultValue: string | FormButton | FormCustomFields
    DefaultValue: string | FormButton | FormCustomFields
    pattern?: string
    patternInvalidErrorMessage?: string
    showLabel: string
    ShowLabel: string
  }
  type: FieldType.HIDDEN
}

export type FormField =
  | FormFieldTitleDescription
  | FormFieldRadio
  | FormFieldSelect
  | FormFieldCheckboxList
  | FormFieldPassword
  | FormFieldCheckbox
  | FormFieldTextarea
  | FormFieldText
  | FormFieldConsent
  | FormFieldDate
  | FormFieldReCaptcha
  | FormFieldHidden

export interface FormFieldsetColumn {
  width: number
  fields: FormField[]
}

export interface FormFieldset {
  caption?: string
  condition?: FormCondition
  columns: FormFieldsetColumn[]
}

export interface FormPage {
  fieldsets: FormFieldset[]
  caption?: string
}
export interface CustomFieldsPage {
  [key: string]: CmsPage
}

export interface Form {
  _id: string
  indicator?: string
  name: string
  nextLabel?: string
  previousLabel?: string
  submitLabel?: string
  disableDefaultStylesheet: boolean
  fieldIndicationType: FormFieldIndicationType
  hideFieldValidation: boolean
  messageOnSubmit?: string
  showValidationSummary: boolean
  pages: FormPage[]
  _links: {
    self: {
      href: string
    }
  }
}

export interface UmbracoForm {
  __typename: CompositionTypeNames.FORM
  umbracoForm: Form
}

export interface FormData {
  emailSettings: BackEndEmailSettings[]
  guIReference?: string
  formData: FormDataSection[]
  formType: string
}

export interface FormDataSection {
  sectionName: string
  sectionFields: FormSectionFields[]
}

export interface FormSectionFields {
  name: string
  value?: string
}

export enum FormFieldIndicationType {
  NO_INDICATOR = 'NO_INDICATOR',
  MARK_MANDATORY_FIELDS = 'MARK_MANDATORY_FIELDS',
  MARK_OPTIONAL_FIELDS = 'MARK_OPTIONAL_FIELDS',
}

export enum FieldType {
  TITLE_AND_DESCRIPTION = 'titleAndDescription',
  RADIO = 'radio',
  SELECT = 'select',
  CHECKBOX_LIST = 'checkboxList',
  PASSWORD = 'password',
  CHECKBOX = 'checkbox',
  DATE = 'date',
  TEXTAREA = 'textarea',
  TEXT = 'text',
  DATA_CONSENT = 'dataConsent',
  RECAPTCHA = 'recaptcha2',
  HIDDEN = 'hidden',
}
