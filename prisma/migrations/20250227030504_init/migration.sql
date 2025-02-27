BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[users] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] VARCHAR(255) NOT NULL,
    [email] VARCHAR(255) NOT NULL,
    [role] VARCHAR(255),
    [password] VARCHAR(255) NOT NULL,
    [created_at] DATETIME,
    [updated_at] DATETIME,
    [updated_by] VARCHAR(255) NOT NULL,
    [created_by] VARCHAR(255) NOT NULL,
    CONSTRAINT [users_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [users_email_unique] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[master_checklists] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] VARCHAR(255) NOT NULL,
    [short_desc] VARCHAR(255) NOT NULL,
    [workcenter] VARCHAR(20) NOT NULL,
    [model] VARCHAR(100) NOT NULL,
    [status] BIT NOT NULL,
    [updated_by] NVARCHAR(1000) NOT NULL,
    [created_by] NVARCHAR(1000) NOT NULL,
    [updated_at] DATETIME NOT NULL,
    [created_at] DATETIME NOT NULL,
    CONSTRAINT [master_checklists_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[master_checklist_details] (
    [id] NVARCHAR(1000) NOT NULL,
    [checklist_header_id] VARCHAR(255) NOT NULL,
    [name] VARCHAR(255) NOT NULL,
    [short_desc] VARCHAR(255),
    [required_image] VARCHAR(255),
    [updated_by] VARCHAR(255) NOT NULL,
    [created_by] VARCHAR(255) NOT NULL,
    [updated_at] DATETIME,
    [created_at] DATETIME,
    CONSTRAINT [master_checklist_details_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[access_tokens] (
    [id] NVARCHAR(1000) NOT NULL,
    [tokenable_type] VARCHAR(255) NOT NULL,
    [tokenable_id] VARCHAR(255) NOT NULL,
    [name] VARCHAR(255) NOT NULL,
    [token] VARCHAR(64) NOT NULL,
    [abilities] TEXT,
    [last_used_at] DATETIME,
    [expires_at] DATETIME,
    [created_at] DATETIME,
    [updated_at] DATETIME,
    CONSTRAINT [access_tokens_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [access_tokens_token_unique] UNIQUE NONCLUSTERED ([token])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [master_checklists_updated_by_fkey1] ON [dbo].[master_checklists]([updated_by]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [master_checklists_created_by_fkey1] ON [dbo].[master_checklists]([created_by]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [master_checklist_detail_checklist_header_id_fkey] ON [dbo].[master_checklist_details]([checklist_header_id]);

-- AddForeignKey
ALTER TABLE [dbo].[master_checklists] ADD CONSTRAINT [master_checklists_created_by_fkey] FOREIGN KEY ([created_by]) REFERENCES [dbo].[users]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[master_checklists] ADD CONSTRAINT [master_checklists_updated_by_fkey] FOREIGN KEY ([updated_by]) REFERENCES [dbo].[users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[master_checklist_details] ADD CONSTRAINT [master_checklist_details_checklist_header_id_fkey] FOREIGN KEY ([checklist_header_id]) REFERENCES [dbo].[master_checklists]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
