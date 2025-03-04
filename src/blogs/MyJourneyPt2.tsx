import pie from "../assets/images/MyJourneyPt2/pie.png";
import qa1 from "../assets/images/MyJourneyPt2/qa1.png";
import qa2 from "../assets/images/MyJourneyPt2/qa2.png";
import Paragraph from "../components/elements/Paragraph";
import Title from "../components/elements/Title";

export default function MyJourneyPt2() {
  return (
    <>
      <Title>My Journey Pt. 2</Title>
      <div class="space-y-2 mt-4">
        <Paragraph
          img={{
            src: pie,
            direction: "right",
          }}
        >
          As most are well aware, math is a challenging subject for many. The
          different equations, rules, and symbols can be difficult to memorize
          and understand quickly. Repeatedly reading notes and going over
          lectures can become very tedious and may cause people to lose
          motivation to continue studying. Studies show that people tend to
          retain information when they engage with the material and actively
          enjoy doing so. This is why our team is focusing on gamifying math. By
          integrating games with the learning material, we aim to create an
          interactive environment that enhances recall through active
          participation.
        </Paragraph>
        <Paragraph
          img={{
            src: qa1,
            direction: "left",
          }}
        >
          Our initial assumption was based more on what we thought older
          students would enjoy—having a more structured game with defined goals
          that progressively became more difficult to build up the skills
          needed. However, after conducting surveys and interviews, we noticed
          that many people actually preferred the open-world concept because it
          felt less like school. While we were envisioning the game, we also
          considered incorporating a system to track progress. This was
          supported by many responses from both survey takers and people being
          interviewed. One interesting idea we also took into account from
          someone I interviewed was making the game multiplayer. However, this
          made us consider whether players would be at the same level—learning
          versus practicing—and if that would affect users' confidence levels.
          This led us to think not only about the game or level itself but also
          about what people would enjoy and how to prevent interactions from
          becoming negative.
        </Paragraph>
        <Paragraph
          img={{
            src: qa2,
            direction: "left",
          }}
        >
          Overall, our approach to connecting with potential users was to
          present some conflicting ideas and understand their thought processes
          on those topics. One big challenge was people's availability, so most
          of the interviews we conducted had to be online rather than in person.
          Other than that, synthesizing and analyzing the data was fairly
          simple. We gathered all of our interviews, grouped similar ideas
          together, and compared conflicting ideas to get a holistic view of
          what our potential users would prefer. While this did make us consider
          some new and unexplored areas, it ultimately gave us fresh
          perspectives and sparked ideas we hadn't thought of before. We now
          want to add an optional tutorial at the beginning and include small
          hints to keep people motivated without giving away the answers. We
          also want to provide more detailed feedback and explanations.
        </Paragraph>
        <Paragraph>
          These insights from user research taught me some valuable lessons, one
          of which is that everyone's experiences and thought processes are
          valuable, even if they differ from the majority. This research can
          also help designers and developers make more informed decisions
          because it allows you to put yourself in other people's shoes. It can
          also improve communication by focusing on the needs of others and
          understanding why they think the way they do. In any career,
          understanding what others want solves half of the problem, whether
          it's regarding the product or the needs of different teammates. It
          helps craft good strategies and fosters relationships where everyone
          feels heard and valued.
        </Paragraph>
        <Paragraph>
          Knowing the user has made me more aware of how different types of
          technology will impact people's lives. For example, some technologies
          feel tailored to how I like to do things, while others seem like they
          weren't made with the user in mind. For instance, pushing out buggy
          features can make the user experience much more frustrating. While it
          may be unintentional, the fact that users encounter these bugs makes
          it frustrating nonetheless. Personally, this teaches me to consider
          what everyone—rather than just people like me—would like and prefer.
          It pushes me out of my comfort zone so that I can envision what others
          focus on and what they value.
        </Paragraph>
      </div>
    </>
  );
}
