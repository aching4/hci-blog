import flow1 from "../assets/images/MyJourneyPt4/flow1.png";
import flow2 from "../assets/images/MyJourneyPt4/flow2.png";
import game from "../assets/images/MyJourneyPt4/game.jpg";
import Paragraph from "../components/elements/Paragraph";
import Title from "../components/elements/Title";

export default function MyJourneyPt4() {
  return (
    <>
      <Title>My Journey Pt. 4</Title>
      <div class="space-y-2 mt-4">
        <Paragraph
          img={{
            src: game,
            direction: "left",
          }}
        >
          The first version of our prototype was a very rough sketch of just the
          run through of how Mathified work. We essentially attempted to build
          how each page would look and what would need to be on there. To do
          this, I mainly looked into what specific information we would need
          from the user: like what branch, any specific focus areas, and what
          games mode/type they would like to use. This builds the basics of the
          application as it points to what we will show on our screens first.
          Then I along with my team thought about an example games we could use.
          One of the first and simplest games we thought of was a maze where
          users can run around and grab keys/objects (to grab each, users would
          need to solve a math question). Once all keys/objects are gotten,
          users must get to the door and solve the final and hardest ones. I
          really like this idea because it easily scalable - it can adjust
          itself to have more or less objects to grab as well as include
          different challenges to get to each object, making it more
          interactive. Since I was so focused on the gameplay and how each thing
          connected to the next, I completely forgot about the different
          solutions that we would need to help users out, including the hint
          system, which made it into our second iteration of the prototype. All
          of this was mostly done on paper and then prototyped to move to
          different areas based off of figma interactions. The figma
          interactions took a while to perfect.
        </Paragraph>
        <Paragraph
          img={{
            src: flow1,
            direction: "right",
          }}
        >
          We ended up testing the prototype on some people who did not know what
          Mathified was and got some interesting feedback. One of them was
          adding colors to indicate if a user has already worked on it or what
          level they are at. For example, red means you aren't at that level,
          yellow means you are working on it, and green means you are good with
          those concepts. I actually really liked this idea because it
          personalizes it more which I think users prefer. At the beginning
          there were some issues with the linking of the pages, but that ended
          up getting fixed. There were not big issues, but I was surprised by
          how the figma prototype has started to really help me picture how the
          application is supposed to look and the flow of how each thing
          connects to another.
        </Paragraph>
        <Paragraph
          img={{
            src: flow2,
            direction: "left",
          }}
        >
          One big thing I ended up missing was the hint system and the step by
          step guide that shows you a similar problem. I think I missed this
          because I got too wrapped up in trying to get the flow correct that I
          missed details. I also had some other smaller fixes that was suggested
          but was not important since they were more geared towards making the
          application look nicer. The prototype at the end had better flow and
          included a little more features compared to the first one. I learned
          that most of the time people will miss things and focus on areas that
          may not be the most important. But, it has taught me to always look
          for more areas to think through designs as well as pretend to be the
          user. The design was not as hard as I imagined it to be but there were
          challenges in deciding which things to put first. There was a lot of
          back and forth on the pros and cons of each side.
        </Paragraph>
        <Paragraph>
          Overall, the most challenging part of rapid prototyping is seeing the
          bigger picture when drawing out each section. Since you only see the
          section you are on and the previous one, it is very easy to get lost
          on what needs to happen next. I enjoyed being able to start picturing
          how the end result will look like and create the bigger picture view
          that often gets overlooked. It was also very rewarding being able to
          see the prototype come to life and just to the next area. One advice I
          would give is to make sure that when people are putting pictures into
          figma, they need to ensure that the sizing fits with the screens. That
          issue took me a while to fix since I needed to scale everything down
          including the interactions and buttons already made.
        </Paragraph>
      </div>
    </>
  );
}
