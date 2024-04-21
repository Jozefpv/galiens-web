import Separator from "../separator/separator"
import Wrapper from "../wrapper/wrapper"
import About from "../about/about"
import Ranking from "../ranking/ranking"

function Main() {
  return (
    <div>
        <Wrapper></Wrapper>
        <Separator></Separator>
        <About></About>
        <Separator></Separator>
        <Ranking></Ranking>
        <Separator></Separator>
    </div>
  )
}

export default Main