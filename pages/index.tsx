import "../styles/Home.module.css";
import { useEffect, useState, useRef } from "react";
import type { NextPage } from "next";
import { useWallet, useWalletList, useAssets, useLovelace } from '@meshsdk/react';
import React from 'react';
import Head from 'next/head'
import Script from 'next/script'


const Party: NextPage = () => {
  const { connected, wallet, connect, disconnect } = useWallet();
  const walletList = useWalletList()
  const assets = useAssets()
  const [hasPolicyIdAssets, setHasPolicyIdAssets] = useState(false);
  const [hasPolicyIdAssetsChecked, setHasPolicyIdAssetsChecked] = useState(false);
  const lovelace: any = useLovelace();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkPolicyIdAssets = async () => {
      const assets = await wallet.getPolicyIdAssets('c117f33edeee4b531dfdb85ead5753433c9dbd875629bc971013ffac');
      setHasPolicyIdAssetsChecked(true)
      // setHasPolicyIdAssets(true)

      if (!assets.length) {
        return disconnect()
      }
      setHasPolicyIdAssets(true)
    }

    if (connected) {
      checkPolicyIdAssets()
    }

  }, [connected])


  const handleDisconnect = () => {
    disconnect()
    setHasPolicyIdAssetsChecked(false)
    setHasPolicyIdAssets(false)
  }

  return (
    <div className="page">
     
      <header>
        <div className="content">
          <div className="nav">
            <ul>
              <li>
                <a href="https://brightly.community/#interviews">Interviews</a>
              </li>
              <li>
                <a href="https://brightly.community/#nft">NFTs 101</a>
              </li>
              <li>
                <a href="https://brightly.community/#about">about</a>
              </li>
              <li>
                <a href=".page/html" className="active">
                  party favorz 
                </a>
              </li>
            </ul>
          </div>
          <div className="left">
            <a href="https://www.notion.so/8bc082bd6d4c4b99add39a5ef078df95">✨ the pledge ✨</a>

          </div>
          <div className="header_logo">
            <a href="https://brightly.community/">
              <img src="./img/header_logo.png" alt="" />
            </a>
          </div>
          <div className="mobile_nav">
            <a href="https://brightly.community/" />
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
              <a href="https://brightly.community/#nft">NFTs 101</a>
            </li>
            <li>
              <a href="https://brightly.community/#interviews">about</a>
            </li>
            <li>
              <a href="./page.html">Party favorz</a>
            </li>
          </ul>
          <div className="links">
            <a href="https://twitter.com/myBBweb3">twitter</a>
            <a href="https://notionforms.io/forms/telegram">telegram</a>
            <a href="https://bestandbrightest.xyz/">bb</a>
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
            <h1>Party Favorz ✨</h1>
          </div>
          <div className="right">
            <p>BB main collection holders have exclusive access to super cool gifts. 🎁</p>
          </div>
        </div>
      </section>


      <section className="favorz favorz_1">
        {/*ITEMS STARTS HERE YOU CAN DUPLICATE THE DIV THAT HAS THE item CLASSNAME */}
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

            <div className="item no_shadow hide" data-id={2}>
              <div className="img">
                <img src="./img/fly_by_jing_scc_macro_edit.jpeg" alt="" />
              </div>
              <div className="text">
                <p className="small">You’ll put this on everything 🥟</p>
                <p className="big">Chili Crisp by Fly by Jing</p>
              </div>
            </div>

            <div className="item" data-id={3}>
              <div className="img">
                <img src="./img/tv.jpg" alt="" />
              </div>
              <div className="text">
                <p className="small">Snag a snack, enjoy a show</p>
                <p className="big">Apple TV+</p>
              </div>
            </div>

            <div className="item no_shadow hide" data-id={4}>
              <div className="img">
                <img src="./img/headspace_2.jpg" alt="" />
              </div>
              <div className="text">
                <p className="small">Mindfulness for any mind, any mood, any goal</p>
                <p className="big">Headspace</p>
              </div>
            </div>

            <div className="item no_shadow hide" data-id={5}>
              <div className="img">
                <img src="./img/audible.jpeg" alt="" />
              </div>
              <div className="text">
                <p className="small">The best audio storytelling, from audio books to podcasts</p>
                <p className="big">Audible</p>
              </div>
            </div>

            <div className="item item_height2 smile " data-id={6}>
              <div className="img">
                <img src="./img/hero-image copy.jpg" alt="" />
              </div>
              <div className="text">
                <p className="small">Play millions of songs ad-free, on-demand, and offline</p>
                <p className="big">Spotify Premium</p>
              </div>
            </div>

            <div className="item no_shadow hide" data-id={7}>
              <div className="img">
                <img src="./img/amazon.jpeg" alt="" />
              </div>
              <div className="text">
                <p className="small">Snag your favorite stuff</p>
                <p className="big">Amazon.com</p>
              </div>
            </div>

            <div className="item item_height2 smile " data-id={8}>
              <div className="img">
                <img src="./img/576bee69910584e73c8cad7c.jpeg" alt="" />
              </div>
              <div className="text">
                <p className="small">Coffee’s on us (again!) </p>
                <p className="big">Starbucks</p>
              </div>
            </div>

            <div className="item item_height2 smile " data-id={9}>
              <div className="img">
                <img src="./img/surge.png" alt="" />
              </div>
              <div className="text">
                <p className="small">Learn about how blockchains work under the hood</p>
                <p className="big">Dive into crypto with SURGE</p>
              </div>
            </div>

            <div className="item no_shadow hide" data-id={10}>
              <div className="img">
                <img src="./img/lunarcrash_1.jpg" alt="" />
              </div>
              <div className="text">
                <p className="small">View trending social & market insights on your favorite cryptocurrencies, NFTs, and stocks.</p>
                <p className="big">LunarCrush</p>
              </div>
            </div>

            <div className="item no_shadow hide" data-id={11}>
              <div className="img">
                <img src="./img/gradient-yoga-poses-collection_52683-84551 copy.jpg" alt="" />
              </div>
              <div className="text">
                <p className="small">Level-up your flexibility & deeply relax the mind</p>
                <p className="big">Group yoga class</p>
              </div>
            </div>

            <div className="item item_height2 smile " data-id={12}>
              <div className="img">
                <img src="./img/studs.jpg" alt="" />
              </div>
              <div className="text">
                <p className="small">Earrings for every mood</p>
                <p className="big">Studs</p>
              </div>
            </div>

            <div className="item" data-id={13}>
              <div className="img">
                <img src="./img/meditate.jpeg" alt="" />
              </div>
              <div className="text">
                <p className="small">Learn how to cultivate mindfulness & practice meditation</p>
                <p className="big">Group meditation class</p>
              </div>
            </div>

            <div className="item no_shadow hide" data-id={14}>
              <div className="img">
                <img src="./img/aced8efdc065ee1b6bbefdfab970ac8f.png" alt="" />
              </div>
              <div className="text">
                <p className="small">Sit back, relax, and grab some popcorn</p>
                <p className="big">Mooooovie night</p>
              </div>
            </div>

            <div className="item item_height2 smile " data-id={15}>
              <div className="img">
                <img src="./img/glossier.jpeg" alt="" />
              </div>
              <div className="text">
                <p className="small">A pocket mirror with an important reminder</p>
                <p className="big">"You Look Good" from Glossier</p>
              </div>
            </div>

            <div className="item" data-id={16}>
              <div className="img">
                <img src="./img/telegram.jpeg" alt="" />
              </div>
              <div className="text">
                <p className="small">Unlock the Premium experience on Telegram</p>
                <p className="big">Telegram Premium</p>
              </div>
            </div>

            <div className="item no_shadow hide" data-id={17}>
              <div className="img">
                <img src="./img/https___hypebeast.com_image_2022_03_exclusive-doodles-sxsw-merch-vinyl-figure-allrightsreserved-sk-lam-nft-collection-1.jpg" alt="" />
              </div>
              <div className="text">
                <p className="small">Showcase your favorite assets </p>
                <p className="big">Custom LED NFT plaque ✨</p>
              </div>
            </div>

            <div className="item no_shadow hide" data-id={18}>
              <div className="img">
                <img src="./img/amber_2.jpg" alt="" />
              </div>
              <div className="text">
                <p className="small">Embrace your femininity 💪</p>
                <p className="big">These Are My Big Girl Pants by Amber Vittoria ✨</p>
              </div>
            </div>

            <div className="item no_shadow hide" data-id={19}>
              <div className="img">
                <img src="./img/coming_soon_1.jpg" alt="" />
              </div>
              <div className="text">
                <p className="small">A wallet essential from our web3 fave 💕</p>
                <p className="big">Notes to Self by Miss NFT 🌈</p>
              </div>
            </div>

            <div className="item no_shadow hide" data-id={20}>
              <div className="img">
                <img src="./img/favorz_5.png" alt="" />
              </div>
              <div className="text">
                <p className="small"> </p>
                <p className="big"> </p>
              </div>
            </div>

            <div className="item no_shadow hide" data-id={21}>
              <div className="img">
                <img src="./img/favorz_6.png" alt="" />
              </div>
              <div className="text">
                <p className="small"> </p>
                <p className="big"> </p>
              </div>
            </div>

            <div className="item no_shadow hide" data-id={22}>
              <div className="img">
                <img src="./img/favorz_4.png" alt="" />
              </div>
              <div className="text">
                <p className="small"> </p>
                <p className="big"> </p>
              </div>
            </div>

            <div className="item no_shadow hide" data-id={20}>
              <div className="img">
                <img src="./img/favorz_5.png" alt="" />
              </div>
              <div className="text">
                <p className="small"> </p>
                <p className="big"> </p>
              </div>
            </div>


            {/*ITEMS ENDS */}
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
            <a href="https://twitter.com/myBBweb3">twitter</a>
            <a href="https://notionforms.io/forms/telegram">telegram</a>
            <a href="https://bestandbrightest.xyz/">bb</a>
          </div>
          <img src="./img/footer_logo.png" alt="" className="logo" />
          <div className="line">
            <a href="https://www.notion.so/PRIVACY-POLICY-87724f26b05842f2957b783a1043cbac">Privacy Policy</a>
            <p>© 2023 Brightly. All Rights Reserved</p>
            <a href="https://big-file-6cd.notion.site/TERMS-AND-CONDITIONS-7813e6aee816433e88d8ce7a6fa2a554">Terms and Conditions</a>
          </div>
        </div>
      </footer>


      <div className={`pop_up pop_wallet ${!hasPolicyIdAssets ? 'active' : ''}`} id="myModal" role="dialog">
        {/* <a href="#" className="close" /> */}
        <div className="pop_content">
          {!hasPolicyIdAssets ?
            <>
              <h2>Connect your wallet</h2>
              <p className="desc">to get access to our incredible Party Favorz</p>

              {
                hasPolicyIdAssetsChecked && <p className="desc no-policy-assets">You have no policy assets</p>
              }

              <ul>
                {
                  walletList?.map(wl => (
                    <li key={wl.name} onClick={() => connect(wl.name)}><a href="#"><span><img src={wl.icon} alt={wl.icon} style={{ width: '100%', maxWidth: '35px' }} /></span>{wl.name}</a></li>

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
                <div className="disconnect">
                  <button
                    onClick={handleDisconnect}
                    className="disconnectbtn"
                  >
                    Disconnect Your Wallet
                  </button>
                </div>
              </>
            )}

        </div>
      </div>


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
            
            
         

<a className="claim" onClick={() => setIsVisible(true)}>
              claim perk
            </a>

    <div className="box">
      {isVisible && (
        <div id="popup1" className="overlay" onClick={() => setIsVisible(false)}>
          <div className="popup">
            
            <a className="pop_content" href="#" onClick={() => setIsVisible(false)}>
                  ×
                </a>
                
            <div className="content">
              <iframe
                style={{ border: "none", width: "100%", height: "610px" }}
                height="610px"
                src="https://notionforms.io/forms/classpass"
              />
            </div>
          </div>
        </div>
      )}
    </div>

            
          </div>
        </div>
      </div>

      <div className="pop_up pop_party" data-id={2}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="left">
            <img src="./img/fly_by_jing_scc_macro_edit.jpeg" className="pc" alt="" />
            <img src="./img/fly_by_jing_scc_macro_edit.jpeg" className="mobile" alt="" />
          </div>
          <div className="right">
            <p className="name">Chili Crisp by Fly by Jing</p>
            <p className="text">
            The first & only 100% all-natural Sichuan chili sauce, proudly crafted 
            in Chengdu. It's hot, spicy, crispy, numbing and deliciously savory. 
            Intensely flavorful yet not off-the-charts spicy, it’ll make your 
            food taste bolder and the world around you seem a little bit brighter. 
            Use it on everything. Yes, even that.

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
            <a className="claim" onClick={() => setIsVisible(true)}>
              claim perk
            </a>

    <div className="box">
      {isVisible && (
        <div id="popup1" className="overlay" onClick={() => setIsVisible(false)}>
          <div className="popup">
            
            <a className="close_hover" href="#" onClick={() => setIsVisible(false)}>
                  ×
                </a>
                
            <div className="content">
              <iframe
                style={{ border: "none", width: "100%", height: "1100px" }}
                height="610px"
                src="https://notionforms.io/forms/chili-crisp-by-fly-by-jing-xyz"
              />
            </div>
          </div>
        </div>
      )}
    </div>


            
          </div>
        </div>
      </div>

      <div className="pop_up pop_party" data-id={3}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="left">
            <img src="./img/tv.jpg" className="pc" alt="" />
            <img src="./img/tv.jpg" className="mobile" alt="" />
          </div>
          <div className="right">
            <p className="name">Apple TV+</p>
            <p className="text">
            Apple TV+ is a streaming service featuring Apple Originals — 
            award-winning series, compelling dramas, groundbreaking 
            documentaries, kids’ entertainment, comedies and more — 
            with new Apple Originals added every month. We’re treating 
            you to a month on us. Luv u.

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
            
            <a className="claim" onClick={() => setIsVisible(true)}>
              claim perk
            </a>

    <div className="box">
      {isVisible && (
        <div id="popup1" className="overlay" onClick={() => setIsVisible(false)}>
          <div className="popup">
            
            <a className="pop_content" href="#" onClick={() => setIsVisible(false)}>
                  ×
                </a>
                
            <div className="content">
              <iframe
                style={{ border: "none", width: "100%", height: "610px" }}
                height="610px"
                src="https://notionforms.io/forms/apple-tv"
              />
            </div>
          </div>
        </div>
      )}
    </div>

            
          </div>
        </div>
      </div>

      <div className="pop_up pop_party" data-id={4}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="left">
            <img src="./img/headspace_2.jpg" className="pc" alt="" />
            <img src="./img/headspace_2.jpg" className="mobile" alt="" />
          </div>
          <div className="right">
            <p className="name">Headspace</p>
            <p className="text">
            Headspace offers guided meditations, courses, and mindfulness 
            exercises on subjects like stress, general anxiety, worry, 
            building resilience, and more topics for any moment. 
            Learn mindfulness and choose from hundreds of meditations 
            led by world-class experts. We think that’s important – holders 
            can apply to claim 3 months of good vibes.


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
            
            <a className="claim" onClick={() => setIsVisible(true)}>
              claim perk
            </a>

    <div className="box">
      {isVisible && (
        <div id="popup1" className="overlay" onClick={() => setIsVisible(false)}>
          <div className="popup">
            
            <a className="pop_content" href="#" onClick={() => setIsVisible(false)}>
                  ×
                </a>
                
            <div className="content">
              <iframe
                style={{ border: "none", width: "100%", height: "680px" }}
                height="610px"
                src="https://notionforms.io/forms/headspace-yzs"
              />
            </div>
          </div>
        </div>
      )}
    </div>



          </div>
        </div>
      </div>

      <div className="pop_up pop_party" data-id={5}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="left">
            <img src="./img/audible.jpeg" className="pc" alt="" />
            <img src="./img/audible.jpeg" className="mobile" alt="" />
          </div>
          <div className="right">
            <p className="name">Audible</p>
            <p className="text">
            Listen to books while relaxing by the fire or traveling on the weekends.
             Audible is storytelling that speaks to you. Audiobooks, podcasts and 
             Audible Originals await in an all-in-one audio entertainment app. 
             Get lost in the books and voices that speak most to you and explore 
             a binge-worthy collection for a month – 100% on us.


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
            
            

            <a className="claim" onClick={() => setIsVisible(true)}>
              claim perk
            </a>

    <div className="box">
      {isVisible && (
        <div id="popup1" className="overlay" onClick={() => setIsVisible(false)}>
          <div className="popup">
            
            <a className="pop_content" href="#" onClick={() => setIsVisible(false)}>
                  ×
                </a>
                
            <div className="content">
              <iframe
                style={{ border: "none", width: "100%", height: "610px" }}
                height="610px"
                src="https://notionforms.io/forms/audiblexyy"
              />
            </div>
          </div>
        </div>
      )}
    </div>

          </div>
        </div>
      </div>

      <div className="pop_up pop_party" data-id={6}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="left">
            <img src="./img/hero-image copy.jpg" className="pc" alt="" />
            <img src="./img/hero-image copy.jpg" className="mobile" alt="" />
          </div>
          <div className="right">
            <p className="name">Spotify Premium</p>
            <p className="text">
            Treat yourself to access to millions of songs and other content from 
            creators all over the world. The best part? With a month of premium 
            on us, you’ll be able to listen to your favorite artists 
            uninterrupted – ttyl, ads! (US holders only)


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
            
            

            <a className="claim" onClick={() => setIsVisible(true)}>
              claim perk
            </a>

    <div className="box">
      {isVisible && (
        <div id="popup1" className="overlay" onClick={() => setIsVisible(false)}>
          <div className="popup">
            
            <a className="pop_content" href="#" onClick={() => setIsVisible(false)}>
                  ×
                </a>
                
            <div className="content">
              <iframe
                style={{ border: "none", width: "100%", height: "680px" }}
                height="610px"
                src="https://notionforms.io/forms/spotify-premium-us"
              />
            </div>
          </div>
        </div>
      )}
    </div>

          </div>
        </div>
      </div>

      <div className="pop_up pop_party" data-id={7}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="left">
            <img src="./img/amazon_2.jpg" className="pc" alt="" />
            <img src="./img/amazon_2.jpg" className="mobile" alt="" />
          </div>
          <div className="right">
            <p className="name">Amazon.com </p>
            <p className="text">
            Gift yourself (or a loved one) from one of planet Earth’s most 
            expansive selection of goodies. eGift cards on us, of course. ✨


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
            
            

            <a className="claim" onClick={() => setIsVisible(true)}>
              claim perk
            </a>

    <div className="box">
      {isVisible && (
        <div id="popup1" className="overlay" onClick={() => setIsVisible(false)}>
          <div className="popup">
            
            <a className="pop_content" href="#" onClick={() => setIsVisible(false)}>
                  ×
                </a>
                
            <div className="content">
              <iframe
                style={{ border: "none", width: "100%", height: "610px" }}
                height="610px"
                src="https://notionforms.io/forms/amazoncom-jjc"
              />
            </div>
          </div>
        </div>
      )}
    </div>

          </div>
        </div>
      </div>

      <div className="pop_up pop_party" data-id={8}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="left">
            <img src="./img/576bee69910584e73c8cad7c.jpeg" className="pc" alt="" />
            <img src="./img/576bee69910584e73c8cad7c.jpeg" className="mobile" alt="" />
          </div>
          <div className="right">
            <p className="name">Starbucks</p>
            <p className="text">
            More than just great coffee. And because well, duh. ☕️

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
            
            

            <a className="claim" onClick={() => setIsVisible(true)}>
              claim perk
            </a>

    <div className="box">
      {isVisible && (
        <div id="popup1" className="overlay" onClick={() => setIsVisible(false)}>
          <div className="popup">
            
            <a className="pop_content" href="#" onClick={() => setIsVisible(false)}>
                  ×
                </a>
                
            <div className="content">
              <iframe
                style={{ border: "none", width: "100%", height: "680px" }}
                height="610px"
                src="https://notionforms.io/forms/starbucks-gift-card-sbg"
              />
            </div>
          </div>
        </div>
      )}
    </div>

          </div>
        </div>
      </div>

      <div className="pop_up pop_party" data-id={9}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="left">
            <img src="./img/surge.png" className="pc" alt="" />
            <img src="./img/surge.png" className="mobile" alt="" />
          </div>
          <div className="right">
            <p className="name">Dive into crypto with SURGE</p>
            <p className="text">
            This very gorgeous & snazzy educational course is designed to help 
            you work in Web3 – you’ll learn about blockchains, Bitcoin & Ethereum, 
            Web3 architecture, smart contracts, Web3 identity, and everything in 
            between. Wanna feel like a pro, fast-track your career, and know how 
            to navigate conversations about crypto? This is for you. 

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
            
            
            <a className="claim" onClick={() => setIsVisible(true)}>
              claim perk
            </a>

    <div className="box">
      {isVisible && (
        <div id="popup1" className="overlay" onClick={() => setIsVisible(false)}>
          <div className="popup">
            
            <a className="pop_content" href="#" onClick={() => setIsVisible(false)}>
                  ×
                </a>
                
            <div className="content">
              <iframe
                style={{ border: "none", width: "100%", height: "610px" }}
                height="610px"
                src="https://notionforms.io/forms/crypto-web3-course"
              />
            </div>
          </div>
        </div>
      )}
    </div>

          </div>
        </div>
      </div>

      <div className="pop_up pop_party" data-id={10}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="left">
            <img src="./img/lunarcrash_1.jpg" className="pc" alt="" />
            <img src="./img/lunarcrash_1.jpg" className="mobile" alt="" />
          </div>
          <div className="right">
            <p className="name">LunarCrush</p>
            <p className="text">
            LunarCrush listens to every drop of crypto information across 
            social & distills it into digestible data to help you make 
            informed decisions. We’re gifting folks with level two access 
            bc you deserve it, fren.

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
            
            
            <a className="claim" onClick={() => setIsVisible(true)}>
              claim perk
            </a>

    <div className="box">
      {isVisible && (
        <div id="popup1" className="overlay" onClick={() => setIsVisible(false)}>
          <div className="popup">
            
            <a className="pop_content" href="#" onClick={() => setIsVisible(false)}>
                  ×
                </a>
                
            <div className="content">
              <iframe
                style={{ border: "none", width: "100%", height: "610px" }}
                height="610px"
                src="https://notionforms.io/forms/lunarcrush-membership"
              />
            </div>
          </div>
        </div>
      )}
    </div>

          </div>
        </div>
      </div>

      <div className="pop_up pop_party" data-id={11}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="left">
            <img src="./img/gradient-yoga-poses-collection_52683-84551 copy.jpg" className="pc" alt="" />
            <img src="./img/gradient-yoga-poses-collection_52683-84551 copy.jpg" className="mobile" alt="" />
          </div>
          <div className="right">
            <p className="name">Group yoga class</p>
            <p className="text">
            Enjoy a 60-minute online yoga class with the BB community! 
            Yoga improves your balance and flexibility while also alleviating 
            muscle pain, anxiety, and stress. Let’s face it – we could all use 
            some of that! Class schedule TBA when class reaches capacity.


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
            <a className="claim" onClick={() => setIsVisible(true)}>
              claim perk
            </a>

    <div className="box">
      {isVisible && (
        <div id="popup1" className="overlay" onClick={() => setIsVisible(false)}>
          <div className="popup">
            
            <a className="pop_content" href="#" onClick={() => setIsVisible(false)}>
                  ×
                </a>
                
            <div className="content">
              <iframe
                style={{ border: "none", width: "100%", height: "540px" }}
                height="610px"
                src="https://notionforms.io/forms/online-group-yoga-class"
              />
            </div>
          </div>
        </div>
      )}
    </div>

          </div>
        </div>
      </div>

      <div className="pop_up pop_party" data-id={12}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="left">
            <img src="./img/studs.jpg" className="pc" alt="" />
            <img src="./img/studs.jpg" className="mobile" alt="" />
          </div>
          <div className="right">
            <p className="name">Studs</p>
            <p className="text">
            Make your earscape uniquely you by shopping hoops, studs, cuffs, & more.
             A shiny new pair (or single!) for your 10/10 gorgeous ear on us. 


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

            <a className="claim" onClick={() => setIsVisible(true)}>
              claim perk
            </a>

    <div className="box">
      {isVisible && (
        <div id="popup1" className="overlay" onClick={() => setIsVisible(false)}>
          <div className="popup">
            
            <a className="pop_content" href="#" onClick={() => setIsVisible(false)}>
                  ×
                </a>
                
            <div className="content">
              <iframe
                style={{ border: "none", width: "100%", height: "1100px" }}
                height="610px"
                src="https://notionforms.io/forms/studs-earrings"
              />
            </div>
          </div>
        </div>
      )}
    </div>

          </div>
        </div>
      </div>

      <div className="pop_up pop_party" data-id={13}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="left">
            <img src="./img/meditate.jpeg" className="pc" alt="" />
            <img src="./img/meditate.jpeg" className="mobile" alt="" />
          </div>
          <div className="right">
            <p className="name">Group meditation class</p>
            <p className="text">
            Meditate with your frens from the BB community – there’s never been a 
            better time. Enjoy 30 minutes of pure relaxation and bliss on us. 
            Class schedule TBA when class reaches capacity.

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
            
            
            <a className="claim" onClick={() => setIsVisible(true)}>
              claim perk
            </a>

    <div className="box">
      {isVisible && (
        <div id="popup1" className="overlay" onClick={() => setIsVisible(false)}>
          <div className="popup">
            
            <a className="pop_content" href="#" onClick={() => setIsVisible(false)}>
                  ×
                </a>
                
            <div className="content">
              <iframe
                style={{ border: "none", width: "100%", height: "540px" }}
                height="610px"
                src="https://notionforms.io/forms/online-group-meditation-class"
              />
            </div>
          </div>
        </div>
      )}
    </div>

          </div>
        </div>
      </div>

      <div className="pop_up pop_party" data-id={14}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="left">
            <img src="./img/prime_video_2.jpg" className="pc" alt="" />
            <img src="./img/prime_video_2.jpg" className="mobile" alt="" />
          </div>
          <div className="right">
            <p className="name">Mooooovie night</p>
            <p className="text">
            Skip the theater & watch blockbuster movies, binge-worthy TV, hit shows 
            and more from your living room. We’re treating you to a movie via Prime 
            Video because we love you.


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
            
            
            <a className="claim" onClick={() => setIsVisible(true)}>
              claim perk
            </a>

    <div className="box">
      {isVisible && (
        <div id="popup1" className="overlay" onClick={() => setIsVisible(false)}>
          <div className="popup">
            
            <a className="pop_content" href="#" onClick={() => setIsVisible(false)}>
                  ×
                </a>
                
            <div className="content">
              <iframe
                style={{ border: "none", width: "100%", height: "610px" }}
                height="610px"
                src="https://notionforms.io/forms/amazon-movie-night"
              />
            </div>
          </div>
        </div>
      )}
    </div>

          </div>
        </div>
      </div>

      <div className="pop_up pop_party" data-id={15}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="left">
            <img src="./img/glossier.jpeg" className="pc" alt="" />
            <img src="./img/glossier.jpeg" className="mobile" alt="" />
          </div>
          <div className="right">
            <p className="name">"You Look Good" from Glossier</p>
            <p className="text">
            Because we all need a little boost. A gorg little mirror with a gorg 
            little message – you’ll find a daily affirmation gracing the front of 
            this lil gem and a pink acrylic backing. Palm-sized, pocket-sized, 
            fun-sized, fits-in-your-pink-pouch-sized, whatever you call 
            it—it’s 3.25” in diameter, cute and easy to take with you. 
            This cutie comes in a 100% cotton, drawstring pouch to keep 
            your mirror safe from dust and free-range purse lipstick 
            (or repurpose it for jewelry and loose change storage).


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
            
            
            <a className="claim" onClick={() => setIsVisible(true)}>
              claim perk
            </a>

    <div className="box">
      {isVisible && (
        <div id="popup1" className="overlay" onClick={() => setIsVisible(false)}>
          <div className="popup">
            
            <a className="pop_content" href="#" onClick={() => setIsVisible(false)}>
                  ×
                </a>
                
            <div className="content">
              <iframe
                style={{ border: "none", width: "100%", height: "1110px" }}
                height="610px"
                src="https://notionforms.io/forms/glossier-you-look-good-mirror"
              />
            </div>
          </div>
        </div>
      )}
    </div>

          </div>
        </div>
      </div>

      <div className="pop_up pop_party" data-id={16}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="left">
            <img src="./img/telegram.jpeg" className="pc" alt="" />
            <img src="./img/telegram.jpeg" className="mobile" alt="" />
          </div>
          <div className="right">
            <p className="name">Telegram Premium</p>
            <p className="text">
            Telegram Premium is the perfect gift to snag for yourself this holiday 
            season. Unlock unlimited download speed, thousands of custom emojis, 
            and more.

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
            
            
            <a className="claim" onClick={() => setIsVisible(true)}>
              claim perk
            </a>

    <div className="box">
      {isVisible && (
        <div id="popup1" className="overlay" onClick={() => setIsVisible(false)}>
          <div className="popup">
            
            <a className="pop_content" href="#" onClick={() => setIsVisible(false)}>
                  ×
                </a>
                
            <div className="content">
              <iframe
                style={{ border: "none", width: "100%", height: "540px" }}
                height="610px"
                src="https://notionforms.io/forms/telegram-premium-y2k"
              />
            </div>
          </div>
        </div>
      )}
    </div>

          </div>
        </div>
      </div>

      <div className="pop_up pop_party" data-id={17}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="left">
            <img src="./img/https___hypebeast.com_image_2022_03_exclusive-doodles-sxsw-merch-vinyl-figure-allrightsreserved-sk-lam-nft-collection-1.jpg" className="pc" alt="" />
            <img src="./img/https___hypebeast.com_image_2022_03_exclusive-doodles-sxsw-merch-vinyl-figure-allrightsreserved-sk-lam-nft-collection-1.jpg" className="mobile" alt="" />
          </div>
          <div className="right">
            <p className="name">Custom LED NFT plaque ✨</p>
            <p className="text">
            Doesn’t a customized LED photo plaque sound like the perfect way to 
            showcase your favorite NFT? We think so, too. Imagine this: a photo 
            of your favorite NFT is lovingly displayed on a sleek clear acrylic 
            plaque and backlit for a real m00d. We want one, too.  ✨ This item 
            is custom, so no product photos are available pre-order.


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
            
            
            <a className="claim" onClick={() => setIsVisible(true)}>
              claim perk
            </a>

    <div className="box">
      {isVisible && (
        <div id="popup1" className="overlay" onClick={() => setIsVisible(false)}>
          <div className="popup">
            
            <a className="pop_content" href="#" onClick={() => setIsVisible(false)}>
                  ×
                </a>
                
            <div className="content">
              <iframe
                style={{ border: "none", width: "100%", height: "1100px" }}
                height="610px"
                src="https://notionforms.io/forms/personalized-nft-photo"
              />
            </div>
          </div>
        </div>
      )}
    </div>

          </div>
        </div>
      </div>

      <div className="pop_up pop_party" data-id={18}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="left">
            <img src="./img/amber.png" className="pc" alt="" />
            <img src="./img/amber.png" className="mobile" alt="" />
          </div>
          <div className="right">
            <p className="name">These Are My Big Girl Pants by Amber Vittoria ✨</p>
            <p className="text">
            From award-winning artist Amber Vittoria comes These Are My Big Girl 
            Pants, a collection of poetry and artwork that embraces womanhood 
            and all of its inherent intricacies. Overarching themes of 
            enlightenment, analysis, and independence speak to young adulthood, 
            and adulthood in all of its many forms, as each poem and accompanying 
            piece of art helps women face these emotional and physical changes. 


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

            <a className="claim" onClick={() => setIsVisible(true)}>
              claim perk
            </a>

    <div className="box">
      {isVisible && (
        <div id="popup1" className="overlay" onClick={() => setIsVisible(false)}>
          <div className="popup">
            
            <a className="pop_content" href="#" onClick={() => setIsVisible(false)}>
                  ×
                </a>
                
            <div className="content">
              <iframe
                style={{ border: "none", width: "100%", height: "1100px" }}
                height="610px"
                src="https://notionforms.io/forms/these-are-my-big-girl-pants-by-amber-vittoria"
              />
            </div>
          </div>
        </div>
      )}
    </div>




          </div>
        </div>
      </div>

      <div className="pop_up pop_party" data-id={19}>
        <a href="#" className="close" />
        <div className="pop_content">
          <div className="left">
            <img src="./img/coming_soon_2.jpg" className="pc" alt="" />
            <img src="./img/coming_soon_2.jpg" className="mobile" alt="" />
          </div>
          <div className="right">
            <p className="name">Notes to Self by Miss NFT 🌈</p>
            <p className="text">
            A very uplifting and very essential limited collection of hand-drawn 
            pieces by friend, mentor, daily inspo, and web3 powerhouse Miss 
            NFT. Inspired by her own journey through postpartum and 
            entrepreneurship, this collection focuses on spreading 
            positivity & motivation through 365 NFTs filled with 
            inspiring quotes, good vibes, and personal reminders 
            to love yourself and stay positive. Sounds like a wallet 
            essential to us. 💕✨This mints on Jan 13th – we’ll be 
            there doing our very best to snag some for you!  


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

            <a className="claim" onClick={() => setIsVisible(true)}>
              claim perk
            </a>

    <div className="box">
      {isVisible && (
        <div id="popup1" className="overlay" onClick={() => setIsVisible(false)}>
          <div className="popup">
            
            <a className="pop_content" href="#" onClick={() => setIsVisible(false)}>
                  ×
                </a>
                
            <div className="content">
              <iframe
                style={{ border: "none", width: "100%", height: "680px" }}
                height="610px"
                src="https://notionforms.io/forms/notes-to-self"
              />
            </div>
          </div>
        </div>
      )}
    </div>




          </div>
        </div>
      </div>

     
      

      <div className={`pop_up_bg ${!hasPolicyIdAssets ? 'active' : ''}`} />

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
                  External <a href="https://www.notion.so/8bc082bd6d4c4b99add39a5ef078df95">link</a> to the pledge
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

      <Script src="./js/main.js"></Script>
      {
        hasPolicyIdAssets && <Script src="./js/connected.js"></Script>
      }
    </div>
  )
}

export default Party;