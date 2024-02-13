export const Post = ({
  username,
  userImage,
  postTime,
  postTitle,
  postContent,
}) => {
  return (
    <article className="flex border border-grey-light-alt rounded bg-white cursor-pointer mb-2 px-5 sm:px-10">
          <div className="sm:w-11/12 pt-3">
            <div className="flex items-center text-xs mb-2">
              <a
                href="#"
                className="font-semibold no-underline hover:underline text-black flex items-center"
              >
                <img
                  className="rounded-full border h-7 w-7"
                  src={userImage}
                  alt="User Avatar"
                />
                <span className="ml-2">{username}</span>
              </a>
              <span className="text-grey-light mx-1 text-xxs">•</span>
              <span className="text-grey">Posted</span>
              <span className="text-grey pl-1">{postTime}</span>
            </div>
            <div>
              <h2 className="text-lg font-bold mb-1 text-black dark:text-white">
                {postTitle}
              </h2>
              <p className="text-grey-darker text-sm">
                {postContent}
              </p>
            </div>
            <div className="inline-flex items-center my-2">
            <div className="flex hover:bg-grey-lighter p-1 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <span className="ml-2 text-xs font-semibold text-gray-500">
                  31 Likes
                </span>
              </div>
              <div className="flex hover:bg-grey-lighter pl-5 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span className="ml-2 text-xs font-semibold text-gray-500">
                  31 Comments
                </span>
              </div>
              <div className="flex hover:bg-grey-lighter pl-5 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                <span className="ml-2 text-xs font-semibold text-gray-500">
                  More
                </span>
              </div>
            </div>
          </div>
        </article>
  );
};
