import type { MetaFunction } from '@remix-run/node';
import { PageIntro } from "~/components/PageIntro";
import { Inference } from "~/components/CTAInference";
import { Hub } from "~/components/CTAHub";
import { Agents } from "~/components/CTAAgents";

export default function Index() {
  return (
    <>
      <PageIntro
        eyebrow="🤗 Hugging Remix"
        title="Modern UX meets open-source NLP"
        centered
      >
        <p>
          <strong>🤗 Hugging Remix</strong> - Building modern user
          experiences with Hugging Face models focused on
          Natural Language Processing (NLP) tasks
        </p>
      </PageIntro>

      <Inference />
      <Hub />
      <Agents />
    </>
  );
}

export const meta: MetaFunction = () => {
  return [
    {
        title: "Hugging Face JS Libraries | Hugging Remix",
    },
    {
        name: "description",
        content: "Hugging Face JS Libraries for Hugging Remix, open source machine learning models in the full-stack React framework"
    },
  ]
}