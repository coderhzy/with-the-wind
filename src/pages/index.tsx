import { useLoaded } from "@/hooks/useLoaded";
import clsx from "clsx";

export default function Home() {
  const isLoaded = useLoaded();

  return (
    <>
      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='mt-[120px]  text-left tablet:mt-[80px] mb:mt-[40px]'>
            <article>
              <div className='flex flex-col items-start mx-8 mb:mx-0'>
                <p className='mb-8 text-4xl text-[#555] dark:text-[#bbb] mb:text-3xl'
                  data-fade='1'>
                  随风
                </p>
                <p>
                  <span className='text-lg text-[#555] dark:text-[#bbb]'
                    data-fade='1'>
                    大家好，我是随风。我是21届毕业的一位前端开发工程师。
                  </span>
                </p>
                <p>
                  <span className={clsx(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )} data-fade='3'>
                    Vue、React、LeetCode、Next.js、TypeScript、Nest.js、MySQL。
                  </span>
                </p>
                <hr
                  className='mx-auto my-[2em] h-0 w-[50px] border-t-[1px] border-[#7d7d7d4d] mb:my-[1em]'
                  data-fade='3'
                />
                <p
                  className={clsx(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='5'
                >
                  最平凡的人，也得要为他那个世界的存在而战斗。
                </p>
                <p
                  className={clsx(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='5'
                >
                  无论是谁，我们都曾经或正在经历各自的人生至暗时刻，那是一条漫长、黝黑、阴冷、令人绝望的隧道。
                </p>
                <hr
                  className='mx-auto my-[2em] h-0 w-[50px] border-t-[1px] border-[#7d7d7d4d] mb:my-[1em]'
                  data-fade='5'
                />
                <p
                  className={clsx(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='7'
                >
                  一个人的命运不是自己想改变就能改变了的，至于理想，只不过是职业好坏的代名词罢了。
                </p>
                <p
                  className={clsx(
                    'mt-6  text-[#555] dark:text-[#bbb]',
                    '2xl:text-xl text-left text-lg'
                  )}
                  data-fade='7'
                >
                  只有永不遏制的奋斗，才能使青春之花即便是凋谢，也是壮丽的凋谢！。
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
