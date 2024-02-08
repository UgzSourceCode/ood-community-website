import { Menu } from '@headlessui/react';
import { ABOUT, CONTACT, EVENTS } from '../../routes/consts.ts';
import closeIcon from "../../assets/icons/close-icon.svg";
import menuIcon from "../../assets/icons/menu-icon.svg";
import infoIcon from "../../assets/icons/info-icon.svg";
import calendarIcon from "../../assets/icons/calendar-icon.svg";
import contactIcon from "../../assets/icons/contact-icon.svg";
import { DISCORD_INVITE_LINK } from '../../consts/external_links.ts';

export const HamburgerMenu = () => {
  return (
    <Menu>
      <Menu.Button>
        {({ open }) =>
          open ? (
            <div className="inline-flex justify-center items-center w-[30px] ">
              <img src={closeIcon} alt="" width={20} height={20} />
            </div>
          ) : (
            <img src={menuIcon} alt="" width={30} height={30} />
          )
        }
      </Menu.Button>
      <div className="bg-white rounded-[10px] overflow-hidden w-[158px] h-fit absolute top-14 right-5 shadow-[0_0_50px_-12px_rgb(0,0,0,0.25)]">
        <Menu.Items>
          <Menu.Item>
            {({ active }) => (
              <a
                href={ABOUT}
                className={`w-full p-[10px] flex justify-start items-center ${
                  active && 'bg-green-100'
                }`}
              >
                <img src={infoIcon} alt="" width={25} height={22} />
                <p className="inline-block ml-[10px]">About us</p>
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href={EVENTS}
                className={`w-full p-[10px] flex justify-start items-center ${
                  active && 'bg-green-100'
                }`}
              >
                <img src={calendarIcon} alt="" width={25} height={22} />
                <p className="inline-block ml-[10px]">Events</p>
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href={CONTACT}
                className={`w-full p-[10px] flex justify-start items-center ${
                  active && 'bg-green-100'
                }`}
              >
                <img src={contactIcon} alt="" width={25} height={25} />
                <p className="inline-block ml-[10px]">Contact</p>
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                className={`flex justify-center items-center bg-[#12A04E] text-white w-full font-montserrat text-xs py-[10px] ${
                  active && 'bg-green-500'
                }`}
                href={DISCORD_INVITE_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord Order of Devs
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </div>
    </Menu>
  );
};
