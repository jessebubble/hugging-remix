import { SectionIntro } from "~/components/SectionIntro";
import { Container } from "~/components/Container";
import { FadeIn } from "~/components/FadeIn";

export function Agents() {

    return (
        <>
        <div className="mt-24 sm:mt-32 lg:mt-40">
            <SectionIntro
                eyebrow="🤗 Hugging Face JS"
                title="@huggingface/agents"

            >
                <p>
                    This library provides a natural language interface to interact with Hugging Face models. 
                    This can be useful for building applications that need to interact with models in a conversational manner
                </p>
            </SectionIntro>

            <Container className="">
                <FadeIn>

                </FadeIn>
            </Container>
        </div>
        </>
    )
}