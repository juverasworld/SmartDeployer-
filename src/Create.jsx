import onlyLogo from './onlyLogo.webp';
import { useState } from 'react';
import { TbBrandTelegram } from "react-icons/tb";
import { RxSwitch } from 'react-icons/rx'
import { RxLinkedinLogo } from 'react-icons/rx'
import { RxGithubLogo } from 'react-icons/rx'

export const Create = () => {
    const [selectedCar, setSelectedCar] = useState('volvo');
    function handleCarChange(event) {
        setSelectedCar(event.target.value);
    }
    const [isOn, setIsOn] = useState(false);

    function handleClick() {
        setIsOn(!isOn);
    }
    return (
        <section className="">
            <div className='sm:block hidden' >
                <nav className='bg-slate-900 flex justify-between py-3    '> <div className='flex text-white font-bold  '>
                    <div >
                        <img src={onlyLogo} alt=""
                            className='w-20 ' />
                    </div>
                    <div className='flex pt-4 px-5'>
                        <div className='px-3'> <a href="#">Home</a> </div>
                        <div className='px-3'> <a href="#">Create</a> </div>
                    </div>
                </div>
                    <div><button className='text-white border-2 bg-blue-800 px-5 py-3 rounded-xl font-bold  '>Metamask</button></div>
                </nav>
                <div className='mx-10 my-5'>
                    <form action="" >

                        <div className='flex'>
                            <div className='mx-10'><p>Payment token</p>
                                <input type="text" className='border-2 w-44 rounded-xl h-10' /></div>
                            <div className='mx-10'><p> <label htmlFor="token">Token type</label></p>
                                <select className='border-2 w-44 rounded-xl h-10' id="cars" name="cars" value={selectedCar} onChange={handleCarChange}>
                                    <option value="free">Free Token</option>
                                    <option value="Basic">Basic Token</option>
                                    <option value="Custom">Custom Token</option>
                                    <option value="Mintable">Mintable Token</option>
                                    <option value="Unlimited">Unlimited Token</option>
                                    <option value="Full">Full Token</option>

                                </select></div>
                            <div><p> <label htmlFor="network">Network</label> </p>
                                <select className='border-2 w-44 rounded-xl h-10' id="cars" name="cars" value={selectedCar} onChange={handleCarChange}>
                                    <option value="Polygon">Polygon</option>
                                    <option value="Etherum">Etherum</option>
                                    <option value="Binance">Binance</option>

                                </select></div>

                        </div>
                    </form>
                </div>
                <div className='flex'>

                    <div className='box mx-16 my-36 '>
                        <form action="" className=''>
                            <div>
                                <p className='font-bold text-center px-5 py-5  text-[20px]'>Create ERC20 Token</p>

                            </div>
                            <div>
                                <div className='flex justify- '>
                                    <div className='mx-12 '>
                                        <div className=''>
                                            <p className='px-3 py-1'>Token name </p>
                                            <input type="text"
                                                className='w-96 h-10 rounded-xl px-5'
                                                placeholder='My token' />
                                        </div>
                                        <div>
                                            <p className='px-3 py-1'>Token Symbol </p>
                                            <input type="text" className='w-96 h-10 rounded-xl px-5' placeholder='MTKN' />
                                        </div>
                                        <div >
                                            <p className='px-3 py-1'>Token decimals </p>
                                            <input type="number" className='w-96 h-10 rounded-xl px-5' placeholder='18' />
                                        </div>
                                        <div>
                                            <p className='px-3 py-1'>Max supply </p>
                                            <input type="number" className='w-96 h-10 rounded-xl px-5' placeholder='10000000' />
                                        </div>
                                        <div>
                                            <p className='px-3 py-1'>Initial supply </p>
                                            <input type="number" className='w-96 h-10 rounded-xl px-5' placeholder='10000000' />
                                        </div>
                                    </div>
                                    <div>
                                        <p className='text-[18px] text-center py-5'>Advanced configuration</p>
                                        <form action="">
                                            <div className='flex dimmedCOlors'>
                                                <div className='mx-5'>
                                                    <div className='flex'>
                                                        <p className='pt-2 px-3 '>Burnable</p>
                                                        <p>
                                                            <RxSwitch className='h-10 w-10  ' />
                                                        </p>
                                                    </div>
                                                    <div className='flex'>
                                                        <p className='pt-2 px-3 active'>Burnable</p>
                                                        <p>
                                                            <RxSwitch className='h-10 w-10  ' />
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>                                 <div className='flex'>
                                                    <p className='pt-2 px-3'>Burnable</p>
                                                    <p>
                                                        <RxSwitch className='h-10 w-10  ' />
                                                    </p>
                                                </div>
                                                    <div className='flex'>
                                                        <p className='pt-2 px-3 '>Burnable</p>
                                                        <p>
                                                            <RxSwitch className='h-10 w-10  ' />
                                                        </p>
                                                    </div>

                                                </div>                         </div>                              {/* <p>
                                            <RxSwitch className='w-20 h-20 text-purple-500' />
                                        </p> */}
                                        </form>
                                    </div>

                                </div>
                                <div className='text-center'><button className='bg-blue-900 font-bold border-2  text-center text-white px-4 rounded-xl py-2 my-10 '>Submit</button></div>
                            </div>
                        </form>
                    </div>
                    <div className='sm:block hidden'>
                        <div className='flex my-20 mx-10'>
                            <div className='bg-blue-900 rounded-full w-10 h-10 leading-10 pl-4 text-white mx-10  '>1</div>
                            <div className='text-blue-900'> SET YOUR TOKEN <br /> FEATURES</div>
                        </div>
                        <div className='flex my-36 mx-10'>
                            <div className='bg-blue-900 rounded-full w-10 h-10 leading-10 pl-4 text-white mx-10 '>2</div>
                            <div className='text-blue-900'> SET YOUR TOKEN <br /> FEATURES</div>
                        </div>
                        <div className='flex  mx-10'>
                            <div className='bg-blue-900 rounded-full w-10 h-10 leading-10 pl-4 text-white mx-10  '>3</div>
                            <div className='text-blue-900'> SET YOUR TOKEN <br /> FEATURES</div>
                        </div>
                    </div>

                </div>
                <footer className='bg-slate-900 flex justify-evenly py-5'> <div className='flex text-white font-bold '>
                    <div >

                    </div>
                    <div className=' pt-4 px-5'>
                        <div className='px-3'> <a href="#">CryptoMaker App</a> </div>
                        <div className='px-3'> <a href="#">Create Token!</a> </div>
                    </div>
                </div>
                    <div>
                        <div className='flex text-white my-3 text-[20px]'>
                            <div>Developer:</div>
                            <div className='text-yellow-600 px-5'><a href="https://www.linkedin.com/in/rafael-contreras-pimentel-8b0b67203">rcontre360</a></div>
                        </div>
                        <div className='flex '>
                            <div >
                                <a href="https://github.com/Rcontre360"> <RxGithubLogo className='mx-5 text-white h-10 w-8' /></a>
                            </div>
                            <div><a href="https://t.me/Rcontre360">      < TbBrandTelegram className='mx-5 text-white h-10 w-8' /></a></div>
                            <div><a href="https://www.linkedin.com/in/rafael-contreras-pimentel-8b0b67203">
                                <RxLinkedinLogo className='mx-5 text-white h-10 w-8' /></a></div>

                        </div>
                    </div>
                </footer>
            </div >
            <div className='sm:hidden block smallScreen'>
                <nav className='bg-slate-900 text-white font-bold'>
                    <div className='flex justify-between'>
                        <div> <img src={onlyLogo} alt="" className='w-20 py-4' /> </div>
                        <div className='flex  py-10'>
                            <div className='mx-3'>Home</div>
                            <div>Create</div>
                        </div>
                        <div className='py-5'><button className='bg-purple-600 border-2 rounded-xl px-3 py-3 '>
                            Metamask
                        </button></div>
                    </div>
                </nav>
                <div>
                    <div className='mx-10 my-5 text-center '>
                        <form action="" >

                            <div className='flex flex-col'>
                                <div className='mx-10 text-gray-400'><p>Payment token</p>
                                    <input type="text" className='border-2  rounded-xl w-[100%] h-10 text-gray' /></div>
                                <div className='mx-10 my-2'><p className='text-gray-400'> <label htmlFor="token">Token type</label></p>
                                    <select className='border-2 w-[100%] rounded-xl h-10' id="cars" name="cars" value={selectedCar} onChange={handleCarChange}>
                                        <option value="free">Free Token</option>
                                        <option value="Basic">Basic Token</option>
                                        <option value="Custom">Custom Token</option>
                                        <option value="Mintable">Mintable Token</option>
                                        <option value="Unlimited">Unlimited Token</option>
                                        <option value="Full">Full Token</option>

                                    </select></div>
                                <div><p> <label htmlFor="network">Network</label> </p>
                                    <select className='border-2 w-[80%] text-gray-400 my-2 rounded-xl h-10' id="cars" name="cars" value={selectedCar} onChange={handleCarChange}>
                                        <option value="Polygon">Polygon</option>
                                        <option value="Etherum">Etherum</option>
                                        <option value="Binance">Binance</option>

                                    </select></div>

                            </div>
                        </form>
                    </div>
                </div>
                <div className='boxSmall mx-5  '>
                    <form action="" className=''>
                        <div>
                            <p className='font-bold text-center px-5 py-5  text-[20px]'>Create ERC20 Token</p>

                        </div>
                        <div>
                            <div className='flex flex-col '>
                                <div className='mx-12 '>
                                    <div className=''>
                                        <p className='px-3 py-1'>Token name </p>
                                        <input type="text"
                                            className=' h-10 rounded-xl px-5 w-[100%]'
                                            placeholder='My token' />
                                    </div>
                                    <div className=''>
                                        <p className='px-3 py-1'>Token symbol </p>
                                        <input type="text"
                                            className=' h-10 rounded-xl px-5 w-[100%]'
                                            placeholder='MTKN' />
                                    </div>
                                    <div className='text-gray-400'>
                                        <p className='px-3 py-1'>Token decimals </p>
                                        <input type="number"
                                            className=' h-10 rounded-xl px-5 w-[100%]'
                                            placeholder='18' />
                                    </div>
                                    <div className='text-gray-400'>
                                        <p className='px-3 py-1'>Initial supply </p>
                                        <input type="text"
                                            className=' h-10 rounded-xl px-5 w-[100%]'
                                            placeholder='10000000' />
                                    </div>
                                    <div className='text-gray-400'>
                                        <p className='px-3 py-1'>Max supply </p>
                                        <input type="text"
                                            className=' h-10 rounded-xl px-5 w-[100%]'
                                            placeholder='10000000' />
                                    </div>
                                </div>
                                <div className='flex flex-col'>
                                    <p className='text-[18px] text-center py-5 font-bold text-[20px] mt-5'>Advanced configuration</p>
                                    <form action="">
                                        <div className='flex flex-col dimmedCOlors '>
                                            <div className='mx-5'>
                                                <div className='flex'>
                                                    <p className='pt-2 px-5 '>Burnable</p>
                                                    <p>
                                                        <RxSwitch className='h-10 w-10  ' />
                                                    </p>
                                                </div>
                                                <div className='flex'>
                                                    <p className='pt-2 px-5 '>Mintable</p>
                                                    <p>
                                                        <RxSwitch className='h-10 w-10  ' />
                                                    </p>
                                                </div>
                                            </div>

                                            <div className='mx-5'>
                                                <div className='flex'>
                                                    <p className='pt-2 px-5 active '>Pausable</p>
                                                    <p>
                                                        <RxSwitch className='h-10 w-10  ' />
                                                    </p>
                                                </div>
                                                <div className='flex'>
                                                    <p className='pt-2 px-5 '>Cappable</p>
                                                    <p>
                                                        <RxSwitch className='h-10 w-10  ' />
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <div className='text-center'><button className='bg-blue-900 font-bold border-2  text-center text-white px-4 rounded-xl py-2 my-10 '>Submit</button></div>
                        </div>
                    </form>
                </div>
                <footer className='bg-slate-900 flex flex-col mt-10 py-5'> <div className='flex text-white font-bold '>
                    <div >

                    </div>
                    <div className=' pt-4 px-5'>
                        <div className='px-3'> <a href="#">CryptoMaker App</a> </div>

                    </div>
                </div>
                    <div>
                        <div className='flex text-white my-3 text-[20px] px-5'>
                            <div className='px-3'>Developer:</div>
                            <div className='text-yellow-600 px-5'><a href="https://www.linkedin.com/in/rafael-contreras-pimentel-8b0b67203">rcontre360</a></div>
                        </div>
                        <div className='px-7 py-2 text-white font-bold '> <a href="#">Create Token!</a> </div>
                        <div className='flex px-2 '>
                            <div><a href="https://t.me/Rcontre360">      < TbBrandTelegram className='mx-7 text-white h-10 w-8' /></a></div>
                            <div >
                                <a href="https://github.com/Rcontre360"> <RxGithubLogo className='mx-7 text-white h-10 w-8' /></a>
                            </div>

                            <div><a href="https://www.linkedin.com/in/rafael-contreras-pimentel-8b0b67203">
                                <RxLinkedinLogo className='mx-5 text-white h-10 w-8' /></a></div>

                        </div>
                    </div>
                </footer>
            </div>
        </section >
    )
}