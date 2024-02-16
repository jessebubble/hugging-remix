import { SectionIntro } from "~/components/SectionIntro";
import { Container } from "~/components/Container";
import { FadeIn } from "~/components/FadeIn";

export function Inference() {

    return (
        <>
        <div className="mt-24 sm:mt-32 lg:mt-40">
            <SectionIntro
                eyebrow="🤗 Hugging Face JS"
                title="@huggingface/inference"

            >
                <p>
                    This library provides a JavaScript interface to the Hugging Face Inference API. 
                    It allows you to make calls to the various machine learning models available on Hugging Face's platform. This can be a more convenient and structured way to interact with the Inference API compared to manually making HTTP requests.
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