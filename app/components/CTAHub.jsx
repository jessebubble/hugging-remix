import { SectionIntro } from "~/components/SectionIntro";
import { Container } from "~/components/Container";
import { FadeIn } from "~/components/FadeIn";

export function Hub() {

    return (
        <>
        <div className="mt-24 sm:mt-32 lg:mt-40">
            <SectionIntro
                eyebrow="🤗 Hugging Face JS"
                title="@huggingface/hub"

            >
                <p>
                    This library provides functions to interact with the Hugging Face Model Hub. 
                    You can use it to create or delete repositories, commit changes, and download files. This can be useful if you're developing models and want to programmatically manage your repositories on Hugging Face
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