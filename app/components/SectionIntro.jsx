import clsx from 'clsx';

import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';

export function SectionIntro({
   eyebrow,
   title,
   children,
   smaller = false,
   invert = false,
   ...props
}) {
   return (
      <Container {...props}>
         <FadeIn className="max-w-2xl">
            <h2>
               {eyebrow && (
                  <>
                     <span
                        className={clsx(
                           'font-display mb-6 block text-base font-semibold',
                           invert ? 'text-spursPink' : 'text-neutral-950'
                        )}
                     >
                        {eyebrow}
                     </span>
                     <span className="sr-only"> - </span>
                  </>
               )}
               <span
                  className={clsx(
                     'font-display block text-balance tracking-tight',
                     smaller
                        ? 'text-2xl font-semibold'
                        : 'text-4xl font-medium sm:text-5xl',
                     invert ? 'text-white' : 'text-neutral-950'
                  )}
               >
                  {title}
               </span>
            </h2>
            {children && (
               <div
                  className={clsx(
                     'mt-6 text-xl text-balance',
                     invert ? 'text-neutral-300' : 'text-neutral-600'
                  )}
               >
                  {children}
               </div>
            )}
         </FadeIn>
      </Container>
   );
}