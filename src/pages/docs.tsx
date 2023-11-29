import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { Group, MediaQuery, Paper, Stack, Text, Title } from "@mantine/core";
import { Prism } from "@mantine/prism";
import Layout from "src/layout/Layout";

const StyledFrame = styled.iframe`
  border: none;
  width: 80%;
  flex: 500px;
  margin: 3% auto;
`;

const StyledContentBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
  line-height: 1.8;

  ${Text} {
    flex: 1;
  }
`;

const StyledHighlight = styled.span<{ $link?: boolean; $alert?: boolean }>`
  display: inline-block;
  text-align: left;
  color: ${({ theme, $link, $alert }) =>
    $alert ? theme.DANGER : $link ? theme.BLURPLE : theme.TEXT_POSITIVE};
  background: ${({ theme }) => theme.BACKGROUND_TERTIARY};
  border-radius: 4px;
  font-weight: 500;
  padding: 2px 4px;
  font-size: 14px;
  margin: ${({ $alert }) => ($alert ? "8px 0" : "1px")};
`;

const Docs = () => {
  return (
    <Layout>
      <Head>
        <title>Documentation - JSON Crack</title>
        <meta name="description" content="Embedding JSON Crack tutorial into your websites." />
      </Head>
      <Stack mx="auto" maw="75%">
        <Group mb="lg" mt={40}>
          <Title order={1} color="dark">
            Documentation
          </Title>
        </Group>
        <Paper p="md" radius="md" withBorder>
          <Title order={3} color="dark">
            # Fetching from URL
          </Title>
          <StyledContentBody>
            <Text>
              By adding <StyledHighlight>?json=https://catfact.ninja/fact</StyledHighlight> query at
              the end of iframe src you will be able to fetch from URL at widgets without additional
              scripts. This applies to editor page as well, the following link will fetch the url at
              the editor:{" "}
              <StyledHighlight
                as="a"
                href="https://jsoncrack.com/editor?json=https://catfact.ninja/fact"
                $link
              >
                https://jsoncrack.com/editor?json=https://catfact.ninja/fact
              </StyledHighlight>
            </Text>

            <StyledFrame
              title="Untitled"
              src="https://codepen.io/AykutSarac/embed/KKBpWVR?default-tab=html%2Cresult"
              loading="eager"
            >
              See the Pen <a href="https://codepen.io/AykutSarac/pen/KKBpWVR">Untitled</a> by Aykut
              Saraç (<a href="https://codepen.io/AykutSarac">@AykutSarac</a>) on{" "}
              <a href="https://codepen.io">CodePen</a>.
            </StyledFrame>
          </StyledContentBody>
        </Paper>
        <Paper p="md" radius="md" withBorder>
          <Title order={2} color="dark">
            # Embed Saved JSON
          </Title>
          <StyledContentBody>
            <Text>
              Just like fetching from URL above, you can embed saved public json by adding the json
              id to &quot;json&quot; query{" "}
              <StyledHighlight>?json=639b65c5a82efc29a24b2de2</StyledHighlight>
            </Text>
            <StyledFrame
              title="Untitled"
              src="https://codepen.io/AykutSarac/embed/vYaORgM?default-tab=html%2Cresult"
              loading="lazy"
            >
              See the Pen <a href="https://codepen.io/AykutSarac/pen/vYaORgM">Untitled</a> by Aykut
              Saraç (<a href="https://codepen.io/AykutSarac">@AykutSarac</a>) on{" "}
              <a href="https://codepen.io">CodePen</a>.
            </StyledFrame>
          </StyledContentBody>
        </Paper>
        <Paper p="md" radius="md" withBorder>
          <Title order={2} color="dark">
            # Communicating with API
          </Title>
          <h3>◼︎ Post Message to Embed</h3>
          <StyledContentBody>
            <Text>
              Communicating with the embed is possible with{" "}
              <StyledHighlight
                as="a"
                href="https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/postMessage"
                $link
              >
                MessagePort
              </StyledHighlight>
              , you should pass an object consist of &quot;json&quot; and &quot;options&quot; key
              where json is a string and options is an object that may contain the following:
              <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                <Prism w={500} language="json">
                  {
                    '{\n  theme: "light" | "dark",\n  direction: "TOP" | "RIGHT" | "DOWN" | "LEFT"\n}'
                  }
                </Prism>
              </MediaQuery>
            </Text>

            <StyledFrame
              scrolling="no"
              title="Untitled"
              src="https://codepen.io/AykutSarac/embed/rNrVyWP?default-tab=html%2Cresult"
              loading="lazy"
            >
              See the Pen <a href="https://codepen.io/AykutSarac/pen/rNrVyWP">Untitled</a> by Aykut
              Saraç (<a href="https://codepen.io/AykutSarac">@AykutSarac</a>) on{" "}
              <a href="https://codepen.io">CodePen</a>.
            </StyledFrame>
          </StyledContentBody>
        </Paper>
        <Paper p="md" radius="md" withBorder>
          <h3>◼︎ On Page Load</h3>
          <StyledContentBody>
            <Text>
              <Text>
                ⚠️ <b>Important!</b> - iframe should be defined before the script tag
              </Text>
              <Text>
                ⚠️ <b>Note</b> - Widget is not loaded immediately with the parent page. The widget
                sends its <b>id</b> attribute so you can listen for it as in the example below to
                ensure its loaded and ready to listen for messages.
              </Text>
            </Text>
            <StyledFrame
              title="Untitled"
              src="https://codepen.io/AykutSarac/embed/QWBbpqx?default-tab=html%2Cresult"
              loading="lazy"
            >
              See the Pen <a href="https://codepen.io/AykutSarac/pen/QWBbpqx">Untitled</a> by Aykut
              Saraç (<a href="https://codepen.io/AykutSarac">@AykutSarac</a>) on{" "}
              <a href="https://codepen.io">CodePen</a>.
            </StyledFrame>
          </StyledContentBody>
        </Paper>
      </Stack>
    </Layout>
  );
};

export default Docs;
