import React from 'react';
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { Anchor, Text } from '@mantine/core';
import { INLINES } from '@contentful/rich-text-types';

import { RichTextProps } from '@/ui/richText/RichText.types';
import { anchorStyles, contentStyles } from '@/ui/richText/RichText.styles';

const options: Options = {
  renderNode: {
    [INLINES.HYPERLINK]: (block, node) => {
      return (
        <Anchor href={block.data.uri} target={'_blank'} rel={'noopener noreferrer'} sx={anchorStyles}>
          {node}
        </Anchor>
      );
    },
  },
};

export const RichText = ({ content, sx = {} }: RichTextProps) => {
  return <Text sx={[sx, contentStyles]}>{documentToReactComponents(content, options)}</Text>;
};
