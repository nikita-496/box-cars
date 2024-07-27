import { createUuid } from "@/core/utils/createUuid";
import { Grid } from "@mui/material";
import { FC } from "react";

import blogImage from "@/assets/blog-1.jpg";
import { ZoomInCardMedia } from "@/components/base/elements/ZoomInCardMedia";
import {
  BlogCardStyled,
  BlogContnetList,
  BlogContnetListItem,
  BlogContnetNavLink,
  BlogContnetStyled,
  BlogMetaTypogarphy,
  BlogTagStyled,
} from "@/components/sections/blog/blog.styles";
import {
  HeadingSection,
  SectionContainer,
  Top,
} from "@/components/sections/sections.styles";

const posts = [
  {
    id: createUuid(),
    image: blogImage,
    author: "Ali Tufan",
    date: "April 20, 2023",
    title: "This Long-Awaited Technology May Finally Change the World",
  },
  {
    id: createUuid(),
    image: blogImage,
    author: "Ali Tufan",
    date: "April 20, 2023",
    title: "This Long-Awaited Technology May Finally Change the World",
  },
  {
    id: createUuid(),
    image: blogImage,
    author: "Ali Tufan",
    date: "April 20, 2023",
    title: "This Long-Awaited Technology May Finally Change the World",
  },
];

const BlogContnet = ({
  author,
  date,
  title,
}: {
  author: string;
  date: string;
  title: string;
}) => {
  return (
    <BlogContnetStyled>
      <BlogContnetList>
        <BlogContnetListItem>
          <BlogMetaTypogarphy>{author}</BlogMetaTypogarphy>
        </BlogContnetListItem>
        <BlogContnetListItem>
          <BlogMetaTypogarphy>{date}</BlogMetaTypogarphy>
        </BlogContnetListItem>
      </BlogContnetList>
      <BlogContnetNavLink to="#">{title}</BlogContnetNavLink>
    </BlogContnetStyled>
  );
};

export const Blog: FC = () => {
  return (
    <section>
      <SectionContainer>
        <Top>
          <HeadingSection>Latest Blog Posts</HeadingSection>
        </Top>
        <Grid container rowGap={5}>
          {posts.map((post) => (
            <Grid key={post.id} xxs={12} md={4}>
              <BlogCardStyled
                cardMediaSlot={<ZoomInCardMedia media={post.image} />}
                cardContentSlot={
                  <BlogContnet
                    author={post.author}
                    date={post.date}
                    title={post.title}
                  />
                }
                cardToolbarSlot={<BlogTagStyled name="News" />}
              />
            </Grid>
          ))}
        </Grid>
      </SectionContainer>
    </section>
  );
};
