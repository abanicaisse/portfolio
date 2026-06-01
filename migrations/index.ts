import * as migration_20260601_123621_fix_content_column from './20260601_123621_fix_content_column';

export const migrations = [
  {
    up: migration_20260601_123621_fix_content_column.up,
    down: migration_20260601_123621_fix_content_column.down,
    name: '20260601_123621_fix_content_column'
  },
];
