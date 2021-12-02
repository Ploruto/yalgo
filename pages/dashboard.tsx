import { StatsCard}  from "components/Stats"
import { TopicGroup } from "components/dashboard/TopicGroup"
import { FixedLeftBar } from "components/FixedLeftBar"
import { InputField } from "components/markdowneditor/InputField"
import { SideFeed } from "components/SideFeed"
import { MainGrid } from "components/MainGrid"
import {stats} from "components/interfaces/StatsCard"
import {IArticleFeedItem} from "components/interfaces/ArticleFeed"
import {IBadge} from "components/Badge"
const Dashboard = (): JSX.Element => {
    const cards: Array<stats>=[{name: "Progress", stat: "52%"}, {name: "Problems Solved", stat: "22%"}, {name: "Topics Learned", stat: "32%"}]

    const item : IArticleFeedItem = {userID: "Ploruto",articleID:"5105105", articleTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",articleDateTime: "1h",userProfilePictureURL: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"}
    const items: Array<IArticleFeedItem> = [];

    for (let i = 0; i < 7; i++) {
        items.push(item);
    }

    const topics: Array<IBadge> = [{text: "Binary Search", color:"blue" }, {text: "Array", color:"green"}, {text: "HashTable", color: "indigo"}]
    for (let index = 0; index < 3; index++) {
        topics.forEach(element => {
            topics.push(element);
        });
    }

    return (
        <>
        <MainGrid>
            <div className="col-start-2  col-span-8 mt-12">
             <TopicGroup topics={topics}/>
            </div>
             <FixedLeftBar>
                <StatsCard cards={cards} title="Last 30 Days"/>
                <div className="my-3"></div>
                <SideFeed title={"New Articles"} articles={items}/>
             </FixedLeftBar>
         </MainGrid>
        </>
            )
}
export default Dashboard;
