import Hero from "../components/HomeHero"
import { StatsCard}  from "components/Stats"
import { FixedLeftBar } from "components/FixedLeftBar"
import { InputField } from "components/markdowneditor/InputField"
import { SideFeed } from "components/SideFeed"
import { MainGrid } from "components/MainGrid"
import {stats} from "components/interfaces/StatsCard"
import {IArticleFeedItem} from "components/interfaces/ArticleFeed"
const Home = (): JSX.Element => {
    const cards: Array<stats>=[{name: "Progress", stat: "52.15%"}, {name: "Problems Solved", stat: "22.5%"}, {name: "Topics Learned", stat: "32.2%"}]

    const item : IArticleFeedItem = {userID: "Ploruto",articleID:"5105105", articleTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ",articleDateTime: "1h",userProfilePictureURL: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"}
    const items: Array<IArticleFeedItem> = [];

    for (let i = 0; i < 7; i++) {
        items.push(item);
    }


    return (
        <>
        <MainGrid>
            <div className="grid grid-cols-12">
             <FixedLeftBar >
                <StatsCard cards={cards} title="Last 30 Days"/>
                <div className="my-3"></div>
                <SideFeed title={"New Articles"} articles={items}/>
             </FixedLeftBar>
         </MainGrid>
        </>
            )
}

export default Home
