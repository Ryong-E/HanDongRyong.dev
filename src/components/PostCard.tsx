import { Badge, Box } from '@chakra-ui/react';
import React from 'react';

const PostCard = ({ posts }: { posts: GatsbyTypes.AllPostTemplateQuery['allMdx']['nodes'] }) => {
  return (
    <>
      {posts.map((post) => (
        <Box overflow="hidden" maxW="sm" width="100%" height="200px" key={post.frontmatter?.slug}>
          <Box p="6">
            <Box display="flex" alignItems="baseline">
              {post.frontmatter?.title}
              <Badge borderRadius="full" px="2" colorScheme="teal">
                {post.frontmatter?.tags?.length !== 0 && post.frontmatter?.tags![0]}
              </Badge>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default PostCard;
