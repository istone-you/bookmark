import Link from "next/link";
import Image from "next/image";
import { client } from "../libs/client";
import { GetStaticProps } from "next";

interface Site {
  id: string;
  title: string;
  url: string;
  image: {
    url: string;
  };
}

interface HomeProps {
  site: Site[];
}

export default function Home({ site }: HomeProps) {
  return (
    <div className="mx-52">
      <ul className="flex flex-wrap justify-center items-center mt-10">
        {site.map((site) => (
          <li
            key={site.id}
            className="my-10 mx-5 list-none transition-transform duration-300 transform hover:-translate-y-2"
          >
            <div className="flex items-center justify-center">
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <Image
                  alt={site.title}
                  src={site.image?.url}
                  width={100}
                  height={100}
                  className="mb-10 mt-10"
                />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const data = await client.get({ endpoint: "site" });

  return {
    props: {
      site: data.contents,
    },
  };
};
