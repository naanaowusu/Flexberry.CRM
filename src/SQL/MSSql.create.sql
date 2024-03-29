﻿



CREATE TABLE [Employer] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] VARCHAR(255)  NULL,

	 [EmployerRole] VARCHAR(255)  NULL,

	 [Administrator_m0] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Lead] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [LeadOrNot] VARCHAR(4)  NULL,

	 [Telephone] VARCHAR(255)  NULL,

	 [Name] VARCHAR(255)  NULL,

	 [Surname] VARCHAR(255)  NULL,

	 [Address] VARCHAR(255)  NULL,

	 [CompanyName] VARCHAR(255)  NULL,

	 [Gender] VARCHAR(6)  NULL,

	 [Email] VARCHAR(255)  NULL,

	 [Date] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Contact] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Telephone] VARCHAR(255)  NULL,

	 [Name] VARCHAR(255)  NULL,

	 [Surname] VARCHAR(255)  NULL,

	 [Address] VARCHAR(255)  NULL,

	 [CompanyName] VARCHAR(255)  NULL,

	 [Gender] VARCHAR(6)  NULL,

	 [Email] VARCHAR(255)  NULL,

	 [Date] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Administrator] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Name] VARCHAR(255)  NULL,

	 [Role] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Activity] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ActivityName] VARCHAR(255)  NULL,

	 [ActivityType] VARCHAR(17)  NULL,

	 [StartOfActivity] DATETIME  NULL,

	 [EndOfActivity] DATETIME  NULL,

	 [Contact_m0] UNIQUEIDENTIFIER  NULL,

	 [Contact_m1] UNIQUEIDENTIFIER  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




 ALTER TABLE [Employer] ADD CONSTRAINT [Employer_FAdministrator_0] FOREIGN KEY ([Administrator_m0]) REFERENCES [Administrator]
CREATE INDEX Employer_IAdministrator_m0 on [Employer] ([Administrator_m0])

 ALTER TABLE [Activity] ADD CONSTRAINT [Activity_FContact_0] FOREIGN KEY ([Contact_m0]) REFERENCES [Contact]
CREATE INDEX Activity_IContact_m0 on [Activity] ([Contact_m0])

 ALTER TABLE [Activity] ADD CONSTRAINT [Activity_FLead_0] FOREIGN KEY ([Contact_m1]) REFERENCES [Lead]
CREATE INDEX Activity_IContact_m1 on [Activity] ([Contact_m1])

 ALTER TABLE [STORMWEBSEARCH] ADD CONSTRAINT [STORMWEBSEARCH_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

 ALTER TABLE [STORMFILTERDETAIL] ADD CONSTRAINT [STORMFILTERDETAIL_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

 ALTER TABLE [STORMFILTERLOOKUP] ADD CONSTRAINT [STORMFILTERLOOKUP_FSTORMFILTERSETTING_0] FOREIGN KEY ([FilterSetting_m0]) REFERENCES [STORMFILTERSETTING]

