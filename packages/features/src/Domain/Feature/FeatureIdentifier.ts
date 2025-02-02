export enum FeatureIdentifier {
  AccountSwitcher = 'com.standardnotes.account-switcher',
  AdvancedChecklist = 'org.standardnotes.advanced-checklist',
  AutobiographyTheme = 'org.standardnotes.theme-autobiography',
  BoldEditor = 'org.standardnotes.bold-editor',
  CloudLink = 'org.standardnotes.cloudlink',
  CodeEditor = 'org.standardnotes.code-editor',
  DailyDropboxBackup = 'org.standardnotes.daily-dropbox-backup',
  DailyEmailBackup = 'org.standardnotes.daily-email-backup',
  DailyGDriveBackup = 'org.standardnotes.daily-gdrive-backup',
  DailyOneDriveBackup = 'org.standardnotes.daily-onedrive-backup',
  DynamicTheme = 'org.standardnotes.theme-dynamic',
  Files = 'org.standardnotes.files',
  FilesBeta = 'org.standardnotes.files-beta',
  FilesLowStorageTier = 'org.standardnotes.files-low-storage-tier',
  FilesMaximumStorageTier = 'org.standardnotes.files-max-storage-tier',
  FocusedTheme = 'org.standardnotes.theme-focus',
  FocusMode = 'org.standardnotes.focus-mode',
  FuturaTheme = 'org.standardnotes.theme-futura',
  ListedCustomDomain = 'org.standardnotes.listed-custom-domain',
  MarkdownBasicEditor = 'org.standardnotes.simple-markdown-editor',
  MarkdownMathEditor = 'org.standardnotes.fancy-markdown-editor',
  MarkdownMinimistEditor = 'org.standardnotes.minimal-markdown-editor',
  MarkdownProEditor = 'org.standardnotes.advanced-markdown-editor',
  MarkdownVisualEditor = 'org.standardnotes.markdown-visual-editor',
  MidnightTheme = 'org.standardnotes.theme-midnight',
  NoteHistory30Days = 'org.standardnotes.note-history-30',
  NoteHistory365Days = 'org.standardnotes.note-history-365',
  NoteHistoryUnlimited = 'org.standardnotes.note-history-unlimited',
  PlainTextEditor = 'org.standardnotes.plain-text-editor',
  PlusEditor = 'org.standardnotes.plus-editor',
  SheetsEditor = 'org.standardnotes.standard-sheets',
  SignInAlerts = 'com.standardnotes.sign-in-alerts',
  SmartFilters = 'org.standardnotes.smart-filters',
  SolarizedDarkTheme = 'org.standardnotes.theme-solarized-dark',
  TagNesting = 'org.standardnotes.tag-nesting',
  TaskEditor = 'org.standardnotes.simple-task-editor',
  TitaniumTheme = 'org.standardnotes.theme-titanium',
  TokenVaultEditor = 'org.standardnotes.token-vault',
  TwoFactorAuth = 'org.standardnotes.two-factor-auth',

  DeprecatedFoldersComponent = 'org.standardnotes.folders',
  DeprecatedFileSafe = 'org.standardnotes.file-safe',
}

/** Identifier for standalone filesafe instance offered as legacy installable */
export const LegacyFileSafeIdentifier = 'org.standardnotes.legacy.file-safe'

export const DeprecatedFeatures = [FeatureIdentifier.DeprecatedFileSafe, FeatureIdentifier.DeprecatedFoldersComponent]

export const ExperimentalFeatures = [FeatureIdentifier.AdvancedChecklist]
