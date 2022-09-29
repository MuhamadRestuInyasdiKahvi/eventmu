import Header from 'components/Header'
import EventSlider from 'components/EventSlider'
import Logo from 'images/logo-hero.svg'
import Head from 'next/head'
import Image from 'next/image'

import PhoneIcon from 'images/phone.svg'
import MoneyBagIcon from 'images/money-bag.svg'
import UploadIcon from 'images/upload.svg'
import DecorIntersect from 'images/decor-intersect-1.svg'
import Testimonial from 'components/Testimonials'

import React, { useCallback } from 'react'
import Link from 'next/link'

import Wa from 'images/wa.svg'
import Ig from 'images/ig.svg'

export default function Home() {
  const alertTest = useCallback(
    () => {
      alert('Terimakasih sudah memberikan tanggapan untuk kami')
    },
    []
  )

  return (
    <div className="">
      <Head>
        <title>Eventmu</title>
        <meta name="description" content="Eventmu Layanan Website Penyedia Event Untuk Kamu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='absolute z-20 lg:z-10 w-full  py-6 lg:py-12'>
        <Header />
      </div>

      <section className='h-[980px] bg-hero flex justify-center items-center relative w-full'>
        <Link href="#event">

          <span className='absolute bottom-20 w-6 h-6 border-white border-b-4 border-r-4 transform rotate-45 translate-y-1/2'></span>
        </Link>
        <div className='max-w-7xl mx-auto'>
          <div className='w-96 h-96 lg:w-[522px] lg:h-[522px]'>
            <Logo className="fill-white " />
          </div>
        </div>
      </section>

      <section className='bg-black-primary' id='event'>
        <div className='max-w-7xl mx-auto py-20'>
          <div className='flex flex-col lg:flex-row gap-y-5 justify-center items-center mb-10'>
            <span className='w-11/12  lg:w-4/12  h-1 bg-gradient-to-l from-purple-1 to-purple-2 rounded-md'></span>
            <h1 className='text-4xl lg:text-5xl text-white  w-full lg:w-4/12 font-sans text-center'>Event Kekinian</h1>
            <span className='w-11/12 lg:w-4/12 h-1 bg-gradient-to-r from-purple-1 to-purple-2 rounded-md'></span>
          </div>
          <EventSlider />
        </div>
      </section>

      <section className='bg-gradient-to-b from-black-primary to-purple-3 scroll-mt-20' id='tentang'>
        <div className='max-w-7xl mx-auto lg:flex '>
          <div className='w-full lg:w-8/12'>
            <div className='flex flex-col lg:flex-row items-center mb-2 gap-y-5 lg:gap-y-0'>
              <span className='w-11/12 lg:w-3/12 h-1 bg-gradient-to-r from-purple-1 to-purple-2 rounded-md lg:mr-6'></span>
              <h3 className='font-semibold text-lg lg:text-3xl text-white font-sans'>Tentang Kami</h3>
            </div>
            <div className='px-5 lg:px-0'>
              <h3 className='font-sans font-bold text-2xl lg:text-4xl text-white mb-5'>
                Eventmu dulu,<br />
                bersenang-senang kemudian</h3>
              <div className='w-full lg:w-5/6'>
                <p className='text-gray-200 text-base lg:text-2xl font-sans '>
                  Eventmu merupakan website yang memudahkan kamu untuk mencari tempat hiburan
                  terbaik mulai dari konser musik, museum seni, dan event-event lainnya.
                  Dengan Eventmu kamu bisa mengetahui event-event apa saja yang akan dilakukan di sekitar kamu.
                  Eventmu memberikan informasi lengkap tentang event-event yang ingin kamu tuju.
                  Eventmu adalah solusi untuk healing kamu.
                </p>
              </div>
            </div>

          </div>
          <div className='hidden lg:w-4/12 lg:block px-5'>
            <Image
              src={'/images/about.png'}
              width="100%"
              height="100%"
              alt='About'
              layout='responsive'
              objectFit='contain'
            />
          </div>
        </div>
      </section>

      <section className='bg-purple-3 relative py-16' id='kontak'>
        <span className='hidden xl:block absolute w-full h-[360px] top-24'>
          <DecorIntersect />
        </span>
        <div className='max-w-7xl mx-auto'>
          <div className='w-full lg:w-6/12 mb-7'>
            <div className='flex flex-col lg:flex-row items-center mb-2 gap-y-5 lg:gap-y-0'>
              <span className='w-11/12 lg:w-3/12 h-1 bg-gradient-to-r from-purple-1 to-purple-2 rounded-md lg:mr-6'></span>
              <h3 className='font-semibold text-lg lg:text-3xl text-white font-sans'>Cara Kerjasama Event</h3>
            </div>
            <div className='px-5 lg:px-0'>
              <h3 className='font-sans font-bold text-2xl lg:text-4xl text-white mb-2'>
                Daftarkan Eventmu Disini!</h3>
              <p className='text-gray-200 text-xl lg:text-2xl font-sans '>
                Tiga langkah mudah daftar di Eventmu
              </p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row gap-10 px-5 lg:px-0'>
            <div className='w-full lg:w-4/12 bg-gradient-to-tr from-purple-1 to-purple-2 rounded-3xl px-14 hover:scale-110 transform transition duration-500'>
              <PhoneIcon className='mx-auto mt-9 mb-5' />
              <h3 className='font-sans font-semibold text-gray-200 text-center mb-5 text-xl'>
                Hubungi
              </h3>
              <p className='text-center font-sans text-gray-200 lg:px-14 text-sm mb-12'>
                Untuk dapat melakukan promosi pada website eventmu, hubungi :
                0813-6352-3549 <br/>(Admin)
              </p>
            </div>
            <div className='w-full lg:w-4/12 bg-gradient-to-tr from-purple-1 to-purple-2 rounded-3xl px-14 hover:scale-110 transform transition duration-500'>
              <MoneyBagIcon className='mx-auto mt-9 mb-5' />
              <h3 className='font-sans font-semibold text-gray-200 text-center mb-5 text-xl'>
                Bayar
              </h3>
              <p className='text-center font-sans text-gray-200 lg:px-14 text-sm mb-12'>
                Untuk pembayaran promosi event dapat melalui e-wallet Ovo, Gopay, Shopeepay, Dana
              </p>
            </div>
            <div className='w-full lg:w-4/12 bg-gradient-to-tr from-purple-1 to-purple-2 rounded-3xl px-14 hover:scale-110 transform transition duration-500'>
              <UploadIcon className='mx-auto mt-9 mb-5' />
              <h3 className='font-sans font-semibold text-gray-200 text-center mb-5 text-xl'>
                Unggah
              </h3>
              <p className='text-center font-sans text-gray-200 lg:px-14 text-sm mb-12'>
                Event akan di upload pada website setelah costumer melakukan pembayaran dan konfirmasi
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='h-[500px] bg-gradient-to-b from-purple-3 to-purple-2 '>
        <div className='max-w-7xl mx-auto relative'>
          <div className='flex flex-col lg:flex-row items-center mb-2 gap-y-5 lg:gap-y-0'>
            <span className='w-11/12 lg:w-3/12 h-1 bg-gradient-to-r from-purple-1 to-purple-2 rounded-md lg:mr-6'></span>
            <h3 className='font-semibold text-lg lg:text-3xl text-white font-sans'>Testimoni</h3>
          </div>
          <h3 className='font-sans font-bold text-2xl lg:text-4xl text-white mb-2 px-5 lg:px-0'>
            Apa Kata Mereka?
          </h3>
          <Testimonial />
        </div>
      </section>

      <section className='bg-purple-2 pb-40 pt-12'>
        <div className='max-w-7xl mx-auto relative'>
          <div className='flex flex-col lg:flex-row items-center mb-2 gap-y-5 lg:gap-y-0'>
            <span className='w-11/12 lg:w-3/12 h-1 bg-gradient-to-r from-purple-1 to-purple-2 rounded-md lg:mr-6'></span>
            <h3 className='font-semibold text-lg lg:text-3xl text-white font-sans'>Komentar</h3>
          </div>
          <h3 className='font-sans font-bold text-2xl lg:text-4xl text-white mb-7 px-5 lg:px-0'>
            Tinggalkan Komentar Disini
          </h3>
          <textarea id="message" rows="5" className="mx-auto px-5 block p-2.5 w-11/12 lg:w-full text-sm text-gray-600 bg-gray-50 rounded-lg border max-h-40 mb-11" placeholder="Tinggalkan Komentar..."></textarea>
          <div className='flex justify-end px-5 lg:px-0'>
            <button className="bg-purple-4 h-12 lg:h-14 rounded-2xl" onClick={alertTest}>
              <span className='px-7 lg:px-14 text-white font-sans font-semibold text-sm'>Kirim Komentar</span>
            </button>
          </div>
        </div>
      </section>

      <section className='bg-black-primary py-9'>
        <div className='max-w-7xl mx-auto'>
          <div className='flex flex-wrap'>
            <div className='w-full lg:w-6/12 mb-2'>
              <p className='text-gray-300 font-sans lg:text-base text-sm text-center lg:text-left'>2022 &copy; Design By <span className='font-bold text-gray-100'>Eventmu</span> All Right Reserved</p>
            </div>
            <div className='w-full lg:w-6/12'>
              <div className='flex gap-10 lg:justify-end justify-center'>
                <div className='flex gap-2 justify-center items-center'>
                  <span className='w-4 lg:w-5 h-4 lg:h-5'>
                    <Wa />
                  </span>
                  <p className='text-gray-300 font-sans text-sm lg:text-base'>0813-6352-3549</p>
                </div>

                <div className='flex gap-2 justify-center items-center'>
                  <span className='w-4 lg:w-5 h-4 lg:h-5'>
                    <Ig />
                  </span>
                  <p className='text-gray-300 font-sans text-sm lg:text-base'>Eventmu</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>







      {/* <section className='relative h-screen'><se
        <span className='absolute w-5/12 h-40 -top-10'>
          <DecorIntersect1 className="fill-purple-1" />
        </span>

        <div className='max-w-7xl mx-auto px-4'>
          <div className='flex'>
            <div className='w-6/12 pt-52'>
              img/slider
            </div>
            <div className='w-6/12 pt-52'>
              <h1 className='text-gray-900 font-serif text-7xl leading-[89px] tracking-tighter'>
                <span className='relative'>
                  Eventmu
                  <span className='absolute -top-8 left-0 -z-10'>
                    <DecorHeroText1 className="w-[326px] h-[75px]" />
                  </span>
                </span> dulu, bersenang-senang kemudian
              </h1>
              <p className='font-sans text-base text-gray-500 mb-7'>Temukan tempat terbaik untuk destinasi liburan kamu.</p>
              <Link href="/">
                <a className='py-2 px-6 bg-gradient-to-r from-gray-1 to-purple-2 rounded-3xl text-white'>Read More</a>
              </Link>
            </div>
          </div>
        </div>
        <span className='absolute w-full h-[363px] bottom-0'>
          <DecorIntersect2 />
        </span>

      </section> */}

      {/* <input type="text" placeholder="Seach..." onChange={event => { searchTerm(event.target.value) }} />
        {items.filter((val) => {
          if (searchTerm == "") {
            return val
          } else if (val.author.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
        }).map((val, key) => {
          return(
            <div className="user" key={key}>
              <p>{val.author}</p>
            </div>
          );
        })} */}

    </div>
  )
}
