import Link from 'next/link';
import Metatags from "../components/Metatags";

export default function guidelines() {
  return (<>
    <Metatags title="Beedol Terms & Guidelines" description="Take a look at Beedol's terms of service and community guidelines"/>
    <main className="guidelinesPage">
      <h1>Beedol Terms & Guidelines</h1>
      <p>Hey! I’m glad you&apos;re thinking about signing up for Beedol, or if you already have, taking a look at the guidelines again. First of all, if you want to use Beedol, you’ll need to follow the Beedol Community Guidelines below. As a user of Beedol, we won’t collect or share any of your data. We also might email you, but we promise to respect your time and not spam your inbox.</p>
      <h2>Community Guidelines</h2>
      <p>First of all, this isn’t an exclusive list. Our moderators can decide what posts they want to delete, and if you will get banned or not. Here are some things that you should/should not do:</p>
      <h3>What you should do:</h3>
      <ul>
        <li>Write well-written articles about school related topics (Math, Science, English, World Languages, etc.)</li>
        <li>Keep posts on-topic. Don’t make meme posts or posts about unrelated topics.</li>
        <li>Read and learn from current articles. If you like it, like it!</li>
        <li>Share true, fact checked information. Site your sources!</li>
      </ul>
      <h3>What you shouldn't do:</h3>
      <ul>
        <li>Don’t harass others.</li>
        <li>Don’t participate or promote hateful content.</li>
        <li>Don’t promote your product or service. If you have a product or service that you think should be allowed, feel free to contact us.</li>
        <li>Don’t share media depicting gore, excessive violence, or animal harm, or other NSFW content.</li>
        <li>Don’t promote or share false or misleading information.</li>
      </ul>
      <p>The above guidelines will continue to change over time, and at the end of the day, you should use common sense.</p>
    </main>
  </>);
}