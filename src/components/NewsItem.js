import React from "react";

const NewsItem = (props) => {
  const { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <>
      <section class="text-gray-600 body-font items-stretch">
        <div class="container px-4 py-18 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-auto">
              <span class="relative inline-block">
                <span class="relative top-2 right-2 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {source}{" "}
                </span>
              </span>
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={
                    !imageUrl
                      ? "https://eagle-sensors.com/wp-content/uploads/unavailable-image.jpg"
                      : imageUrl
                  }
                  alt="content"
                />
                <div class="p-6">
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                    {title}....
                  </h1>
                  <p class="leading-relaxed mb-3">{description}...</p>

                  <div class="flex items-center flex-wrap ">
                    <a
                      href={newsUrl}
                      target="_blank"
                      class="text-orange-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <p class="leading-none">
                      <small>
                        By {author ? author : "Unknown"} On{" "}
                        {new Date(date).toGMTString()}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsItem;
