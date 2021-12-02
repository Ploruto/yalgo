import { Badge, IBadge } from "components/Badge"

export interface ITopicGroup{
    topics: Array<IBadge>;
}

export const TopicGroup: React.FC<ITopicGroup> = ({topics}) => {
    return(
        <>
            <div className="bg-white rounded-lg shadow px-10 py-8">
             <div className="pb-2 mb-2 border-b border-gray-200">
              <h3 className="text-xl -6 font-medium text-gray-900">Topics</h3>
             </div>
                {topics.map((item) =>
                <div className="px-1 inline">
                    <Badge text={item.text} color={item.color}/>
                </div>
                )}
            </div>
    </>
    )

}
