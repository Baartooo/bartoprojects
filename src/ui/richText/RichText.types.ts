import { Document } from '@contentful/rich-text-types';

import { Styles } from '@/theme/theme.types';

export type RichTextProps = {
  content: Document;
  sx?: Styles;
};
