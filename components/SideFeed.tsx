import { IArticleFeed } from "./interfaces/ArticleFeed"

export const SideFeed: React.FC<IArticleFeed>= ({ title, articles }) => {
  return (
    <div>
      <ul className="divide-y divide-gray-200">
        {articles.map((item) => (
          <li key={item.articleID = ""} className="py-4">
            <div className="flex space-x-3">
              <img className="h-6 w-6 rounded-full" src={item.userProfilePictureURL + ""} alt="" />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">{item.userID}</h3>
                  <p className="text-sm text-gray-500">{item.articleDateTime}</p>
                </div>
                <p className="text-sm text-gray-500">
                  {item.articleTitle}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
