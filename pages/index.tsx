import "../styles/Home.module.css";
import { useState } from "react";
import type { NextPage } from "next";
import { useWallet, useWalletList, useAssets, useLovelace } from '@meshsdk/react';
import React from 'react';
import Head from 'next/head'
import Script from 'next/script'

const Party: NextPage = () => {
  const { connected, wallet, connect, } = useWallet();
  const walletList = useWalletList()
  const assets = useAssets()
  const [loading, setLoading] = useState<boolean>(false);
  const lovelace: any = useLovelace();


  return (
    <div className="page">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Brightly</title>
        <link rel="stylesheet" href="./css/owl.carousel.min.css" />
        <link rel="stylesheet" href="./css/main.css" />
        <link rel="stylesheet" href="./css/responsive.css" />
      </Head>
      <header>
        <div className="content">
          <div className="nav">
            <ul>
              <li>
                <a href="https://brightly.community/">Interviews</a>
              </li>
              <li>
                <a href="https://brightly.community/">NFTs 101</a>
              </li>
              <li>
                <a href="https://brightly.community/">about</a>
              </li>
              <li>
                <a href="./page.html" className="active">
                  party favorz
                </a>
              </li>
            </ul>
          </div>
          <div className="right">
            <a href="#">The Pledge</a>

          </div>
          <div className="header_logo">
            <a href="#">
              <img src="./img/header_logo.png" alt="" />
            </a>
          </div>
          <div className="mobile_nav">
            <a href="#" />
          </div>
        </div>
      </header>
      <div className="mobile_nav_pop">
        <div className="content">
          <ul>
            <li>
              <a href="./index.html#interviews">Interviews</a>
            </li>
            <li>
              <a href="./index.html#nft">NFTs 101</a>
            </li>
            <li>
              <a href="./index.html#about">about</a>
            </li>
            <li>
              <a href="./page.html">Party favorz</a>
            </li>
          </ul>
          <div className="links">
            <a href="#">twitter</a>
            <a href="#">telegram</a>
            <a href="#">bb</a>
          </div>
        </div>
        <section className="welcome welcome_1">
          <div className="line">
            vibe with us!<span>✆</span>vibe with us!<span>✆</span>vibe with us!
            <span>✆</span>vibe with us!<span>✆</span>vibe with us!<span>✆</span>vibe
            with us!<span>✆</span>vibe with us!<span>✆</span>vibe with us!
            <span>✆</span>vibe with us!<span>✆</span>vibe with us!<span>✆</span>vibe
            with us!<span>✆</span>vibe with us!<span>✆</span>vibe with us!
            <span>✆</span>vibe with us!<span>✆</span>
          </div>
        </section>
      </div>
      <section className="party_page">
        <div className="content">
          <div className="left">
            <h1>Party Favorz</h1>
          </div>
          <div className="right">
            <p>Become BB holders and get exclusive access to cool gifts.</p>
          </div>
        </div>
      </section>
      <section className="favorz favorz_1">
        <div className="content">
          <div className="items grid">
            <div className="grid-sizer" />
            <div className="item" data-id={1}>
              <div className="img">
                <img src="./img/favorz_1.png" alt="" />
              </div>
              <div className="text">
                <p className="small">Your best self starts now</p>
                <p className="big">Classpass</p>
              </div>
            </div>
            <div className="item item_height2 smile " data-id={1}>
              <div className="img">
                <img src="./img/favorz_2.png" alt="" />
              </div>
              <div className="text">
                <p className="small">Snag a snack, enjoy a show</p>
                <p className="big">Apple TV+</p>
              </div>
            </div>
            <div className="item" data-id={1}>
              <div className="img">
                <img src="./img/favorz_3.png" alt="" />
              </div>
              <div className="text">
                <p className="small">You’ll put this on everything 🥟</p>
                <p className="big">Chili Crisp by Fly by Jing</p>
              </div>
            </div>
            <div className="item item_height2 no_shadow hide" data-id={1}>
              <div className="img">
                <img src="./img/favorz_4.png" alt="" />
              </div>
            </div>
            <div className="item no_shadow hide" data-id={1}>
              <div className="img">
                <img src="./img/favorz_5.png" alt="" />
              </div>
            </div>
            <div className="item no_shadow hide" data-id={1}>
              <div className="img">
                <img src="./img/favorz_6.png" alt="" />
              </div>
            </div>
          </div>
          <a href="#" className="more">
            see more
          </a>
        </div>
      </section>
      <section className="welcome welcome_1">
        <div className="line">
          vibe with us!<span>✆</span>vibe with us!<span>✆</span>vibe with us!
          <span>✆</span>vibe with us!<span>✆</span>vibe with us!<span>✆</span>vibe
          with us!<span>✆</span>vibe with us!<span>✆</span>vibe with us!
          <span>✆</span>vibe with us!<span>✆</span>vibe with us!<span>✆</span>vibe
          with us!<span>✆</span>vibe with us!<span>✆</span>vibe with us!
          <span>✆</span>vibe with us!<span>✆</span>vibe with us!<span>✆</span>vibe
          with us!<span>✆</span>vibe with us!<span>✆</span>vibe with us!
          <span>✆</span>vibe with us!<span>✆</span>vibe with us!<span>✆</span>vibe
          with us!<span>✆</span>
        </div>
      </section>
      <footer>
        <div className="content">
          <div className="links">
            <a href="#">twitter</a>
            <a href="#">telegram</a>
            <a href="#">bb</a>
          </div>
          <img src="./img/footer_logo.png" alt="" className="logo" />
          <div className="line">
            <a href="#">Privacy Policy</a>
            <p>© 2022 Brightly. All Rights Reserved</p>
            <a href="#">Terms and Conditions</a>
          </div>
        </div>
      </footer>
      <div className="pop_up pop_party" data-id={1}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="left">
            <img src="./img/pop_party_pc.png" className="pc" alt="" />
            <img src="./img/pop_party_mobile.png" className="mobile" alt="" />
          </div>
          <div className="right">
            <p className="name">Classpass</p>
            <p className="text">
              This is a gift that's so good it can't be wrapped – a ClassPass
              membership to thousands of fitness classes in 39 cities. Your best
              self starts now, and we’re here to kickstart that for you with a month
              on us.
            </p>
            <p className="p_name">perk eligibility</p>
            <div className="line">
              <div className="line_left">
                <img src="./img/perk.png" alt="" />
              </div>
              <div className="line_right">
                <p>
                  Own 1 x BB <a href="#">main collection</a>
                </p>
              </div>
            </div>
            <a href="#" className="claim">
              claim perk
            </a>
          </div>
        </div>
      </div>

      <div className={`pop_up pop_wallet ${!connected ? 'active' : ''}`} id="myModal" role="dialog">
        {/* <a href="#" className="close" /> */}
        <div className="pop_content">
          {!connected ?
            <>
              <h2>Connect your wallet</h2>
              <p className="desc">to get access to our incredible Party Favorz</p>
              <ul>
                {
                  walletList?.map(wl => (
                    <li onClick={() => connect(wl.name)}><a href="#"><span><img src={wl.icon} alt={wl.icon} style={{ width: '100%', maxWidth: '35px' }} /></span>{wl.name}</a></li>

                  ))
                }
              </ul>
            </>
            : (
              <>
                <h2>Your Wallet Assets</h2>
                <p style={{ color: "black" }}>You have <b>₳ {parseInt(lovelace) / 1000000}</b>.</p>
                {
                  assets && <pre>
                    <code style={{ color: 'black' }} className="language-js">
                      {JSON.stringify(assets, null, 2)}
                    </code>
                  </pre>
                }
              </>
            )}

        </div>
      </div>
      <div className={`pop_up_bg ${!connected ? 'active' : ''}`} />

      <div id="like_button_container" />
      <div className="pop_up pop_interview" data-id={1}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="scroll_content">
            <div className="who">
              <div className="left">
                <img src="./img/who.png" alt="" />
              </div>
              <div className="right">
                <p className="name">
                  Joe Vezzani{" "}
                  <span>
                    <img src="./img/blue_ok.svg" alt="" />
                  </span>
                </p>
                <p className="val">Co-Founder @ LunarCrush</p>
              </div>
            </div>
            <div className="text">
              <h2>
                Social media is tough, but it's about being intellectually honest
                about your time. You can still be the master of yourself.
              </h2>
              <p className="mb">
                I wake up really early and in an ideal world, I’ll always get to the
                gym first thing, so I actually block my calendar in the mornings for
                that. I always block it off and won’t schedule things for that time
                unless there’s something important other people are asking of me. If
                I need to, I'll take that important morning meeting. But otherwise,
                I normally block off the first couple of hours in my morning to head
                to the gym.
              </p>
              <p className="small">
                Typically, if I'm taking care of myself physically, I just feel a
                lot more energized to tackle the rest of the day. I’ll go to the
                gym, have a cup of coffee and then feel ready to work through the
                rest of the day.
              </p>
              <div className="separator" />
              <h3>On staying up-to-date in web3</h3>
              <p className="small mb">
                I definitely spend too much time on Twitter. It probably is still
                kind of my favorite tool for staying on top of things. And then
                there are a couple of resources that I subscribe to.
              </p>
              <p className="small">
                I’ll check out the daily Ralpha newsletter, Zen Academy’s
                newsletter. But I would say that, for the most part, Twitter
                normally has people posting a lot
              </p>
              <div className="separator" />
              <h3>On staying well while web3-ing</h3>
              <p className="small">
                It's definitely hard- I think there's a general expectation to stay
                on top of it. Like it just feels like a space never sleeps, and
                that’s very challenging.
              </p>
              <div className="img">
                <img src="./img/pop_int_1.png" alt="" />
                <p className="img_desc">
                  Image Credits: mustafahacalaki / Getty Images
                </p>
              </div>
              <p className="small">
                Weekends are critical. They’re when I try and take things a little
                easier, and I’m on Twitter much less on the weekends. You kind of
                have to be gracious of yourself- you're always going to miss out on
                things like no matter how hard you try and that's okay. It's going
                to be impossible to stay on top of everything.
              </p>
              <div className="separator" />
              <h3>On curating a positive space for yourself online</h3>
              <p className="small mb">
                I think it’s so important to look at who’s making it onto your feed.
                Who do you want to surround yourself with? I see very little
                negativity on my feeds (not zero, because never say never). Based on
                what I’ve curated, I see really uplifting and beautiful art. I love
                following and supporting a lot of creators. For the most part I feel
                like I’ve created a really friendly, nice spot here on Twitter.
              </p>
              <p className="med">
                I think it’s so important to look at who’s making it onto your feed.
                Who do you want to surround yourself with? I see very little
                negativity on my feeds (not zero, because never say never). Based on
                what I’ve curated, I see really uplifting and beautiful art. I love
                following and supporting a lot of creators. For the most part I feel
                like I’ve created a really friendly, nice spot here on Twitter.
              </p>
              <div className="separator" />
              <h3>On winding down in the pm</h3>
              <p className="small mb">
                I definitely love watching trashy TV. The worst, the better. I love
                line like, yes, really like crazy stuff.
              </p>
              <p className="small">
                But yeah, like I think it's almost my I think I feel like my regular
                day is so full of me, like using my brain. So I love watching shows
                that doesn't that don't work. And so yeah, I get a real kick out of
                doing that and I love watching sports as well. I suppose it's like I
                met a great way for me to like just kind of tune out and just, you
                know. Yeah. So that, that, that's generally what I. But I love, I
                love it.
              </p>
              <div className="img">
                <img src="./img/pop_int_2.png" alt="" />
                <p className="img_desc">
                  Image Credits: mustafahacalaki / Getty Images
                </p>
              </div>
              <div className="separator" />
              <h3>On building toward a North Star</h3>
              <p className="small mb">
                We're always listening. I don't think that we're going to follow it
                to the tee, but I think we definitely always have a lookout for
                that, positive or negative- it’s something that we always pay
                attention to.
              </p>
              <p className="small">
                It's definitely challenging. Obviously, being switched on at all
                times is not sustainable, but at the same time, there is value from
                always just knowing what's going on on a high level. And so I do
                find it a really useful and valuable signal, but at the same time,
                it’s critical to still stay true to your company’s long-term vision
                and direction. Things may not always go according to plan at any
                time, but knowing what that Northstar is for you is something that's
                really, really useful.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pop_up pop_nft" data-id={1}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="scroll_content">
            <h2>What’s crypto?</h2>
            <p className="desc">
              🙌 A high level overview of all things crypto &amp; coins, but
              explained in a digestible way🌈. Kid tested, mom approved. ✨💅
            </p>
            <p className="desc_bot">
              Brief rundown filler text Brief rundown filler text Brief rundown
              filler text Brief rundown filler text Brief rundown filler text Brief
              rundown filler text Brief rundown filler text Brief rundown filler
              text
            </p>
          </div>
        </div>
      </div>
      <div className="pop_up pop_nft" data-id={2}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="scroll_content">
            <h2>Glossary</h2>
            <p className="desc">
              Ttyl, confusion! We’re setting you up with a cheat sheet that’ll power
              you adventures in the cryptoverse &amp; make you feel like a pro.
            </p>
            <p className="desc_bot">
              Let's face it: If you can't talk the talk, it's hard to walk the walk
              in Web3. In an effort to breakdown some of the barriers to entry when
              it comes🤩 to investing and participating in Web3 and crypto, our
              friends at BFF put together the definitive glossary for Web3 jargon.
            </p>
            <a href="#" className="mybff">
              mybff.com
            </a>
          </div>
        </div>
      </div>
      <div className="pop_up pop_nft" data-id={3}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="scroll_content">
            <h2>Web3 social toolkit</h2>
            <p className="desc">
              Everything you’ll need to get up and running like, asap. This is your
              world- we’re just living in it.💅
            </p>
            <div className="toolkit">
              <div className="item">
                <p className="name">
                  <a href="#">The Pledge</a>
                </p>
                <p className="text">
                  New to the web3 community and want a little help snagging your
                  first NFT? We got you, bestie. The Pledge is our way of walking
                  the walk: 🦄 we’re gifting awesome folks like you with gorgeous,
                  women-designed NFTs.
                </p>
                <p className="b_text">
                  External <a href="#">link</a> to the pledge
                </p>
              </div>
              <div className="item">
                <p className="name">
                  <a href="#">Twitter</a>
                </p>
                <p className="text">Filler text filler text filler text</p>
              </div>
              <div className="item">
                <p className="name">
                  <a href="#">Telegram</a>
                </p>
                <p className="text">Filler text filler text filler text</p>
              </div>
              <div className="item">
                <p className="name">
                  <a href="#">Discord</a> <span>(if you’re into that)</span>
                </p>
                <p className="text">Filler text filler text filler text</p>
              </div>
              <div className="item">
                <p className="name">
                  <a href="#">Podcasts</a>
                </p>
                <p className="text">Filler text filler text filler text</p>
              </div>
              <div className="item">
                <p className="name">
                  <a href="#">Communities</a> <span>(link community lesson)</span>
                </p>
                <p className="text">Filler text filler text filler text</p>
              </div>
              <div className="item">
                <p className="name">
                  <a href="#">Bonus: Notion</a> ✨
                </p>
                <p className="text">Filler text filler text filler text</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pop_up pop_nft" data-id={4}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="scroll_content">
            <h2>Digital assets &amp; NFTs</h2>
            <p className="desc">
              ⭐️ Why NFTs are more than just hype &amp; are about to change the
              world. ⭐️
            </p>
            <p className="desc_bot">
              Don’t get stressed about not understanding what an NFT is or how it
              works. NFTs are unique digital goods. This is all the definition that
              you need. It’s just unique identifier for a thing that lives online.
            </p>
            <p className="rb">
              Yes, NFTs can be '“expensive jps” but they’re also membership cards
              and fundraising vehicles and representations of real estate and so, so
              much more. 🎀{" "}
              <span>
                We haven’t even scratched the surface of how versatile NFTs
              </span>{" "}
              can be, and what unique digital ownership will unlock for the next era
              of the internet. Remember cell phones from the 80s?{" "}
              <span>Me neither tbh, but that’s we era we are in with NFTs.</span>{" "}
              Where we go from here is so much more interesting than where we’ve
              been.✨
            </p>
          </div>
        </div>
      </div>
      <div className="pop_up pop_nft" data-id={5}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="scroll_content">
            <h2>Community-building</h2>
            <p className="desc">
              The best part about web3?
              <span>
                {" "}
                The incredible communities waiting to welcome you. We’re here to
                make intros.
              </span>
            </p>
            <div className="text_gray">
              <div className="left">
                <p>🚧</p>
              </div>
              <div className="right">
                <p>
                  Phew- that was a lot! Time to settle in with a coffee and start
                  enjoying your new spot in the crypto community! ☕️🥐
                </p>
              </div>
            </div>
            <p className="big_text">
              To help you get oriented even more,{" "}
              <span className="bold">
                we’d love to get you set up in some awesome women-led crypto
                communities and to share their resources with you!
              </span>
            </p>
            <p className="mid_text">
              <span className="bold">
                To get you started, let’s introduce you to
              </span>{" "}
              <a href="#">Boysclub.eth</a>. <a href="#">BoysClub</a> is a women-led
              project on the{" "}
              <span className="it">
                Ethereum blockchain that’s aimed at onboarding awesome
              </span>{" "}
              female-identifying people into web3!
            </p>
            <p className="big_text">
              <span className="bold">
                Ps: DAOs are also an awesome type of community to join!
              </span>{" "}
              A DAO is a member-owned community that operates without a centralized
              leader, coordinating and operating through a shared set of rules
              enforced on a blockchain.{" "}
              <span className="it">
                You can think of them as an internet-native business that’s
                collectively owned and managed by its members.
              </span>
              DAOs and their members usually form around a shared mission, interest,
              or goal.
            </p>
            <div className="separator" />
            <p className="bottom_text">
              Unlike traditional organizations and corporations, DAOs are
              decentralized- operating primarily through the internet and unifying
              members from all over the world. Also unlike traditional hierarchical
              organizations, DAOs emphasize democratization. In a traditional org, a
              small, centralized authority is typically driving most of the
              decision-making process. In a DAO, decisions and ideas are voted upon
              by the entire community, ensuring every member has a voice in the
              current and future direction of the organization. Members are also
              free to submit their own ideas.
              <br />
              <br />
              Another thing all DAOs have in common is that they all have a
              Treasury- a pool of money collectively owned and managed by the DAO’s
              members. Within a DAO, members can make proposals to vote upon how
              this money is used.✨💅💫
            </p>
          </div>
        </div>
      </div>

      <Script src="./js/jquery.min.js"></Script>
      <Script src="./js/jquery.marquee.min.js"></Script>
      <Script src="./js/masonry.pkgd.min.js"></Script>
      <Script src="./js/owl.carousel.min.js"></Script>
      <Script src="./js/main.js"></Script>
      {
        connected && <Script src="./js/connected.js"></Script>
      }
    </div>
  )
}

export default Party;