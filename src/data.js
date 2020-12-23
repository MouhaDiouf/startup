import { BsFillChatDotsFill } from 'react-icons/bs';
import { FaRocket, FaDev, FaRocketchat } from 'react-icons/fa';
import { GoProject } from 'react-icons/go';
import { SiPaloaltosoftware } from 'react-icons/si';
import Aslan from './images/aslan.jpeg';
import Craig from './images/craig.jpeg';
import Shams from './images/shams.jpeg';
const data = {
  boxes: [
    {
      title: 'System Analysis',
      description:
        'Diminution expression reasonable it we he projection acceptance in devonshire. Perpetual it described at he applauded.',
      icon: <BsFillChatDotsFill />,
      color: '#60ab9a',
    },

    {
      title: 'First Run',
      description:
        'Diminution expression reasonable it we he projection acceptance in devonshire. Perpetual it described at he applauded.',
      icon: <FaRocket />,
      color: '#e28413',
    },
  ],
  offers: [
    {
      title: 'Project Creation',
      description:
        'Down those still witty and balls so chief so. Moment an little remain no lively',
      icon: <GoProject />,
    },
    {
      title: 'Software Developement',
      description:
        'Down those still witty and balls so chief so. Moment an little remain no lively',
      icon: <SiPaloaltosoftware />,
    },
    {
      title: 'Project Management',
      description:
        'Down those still witty and balls so chief so. Moment an little remain no lively',
      icon: <FaDev />,
    },
    {
      title: '24 / 7 Support',
      description:
        'Down those still witty and balls so chief so. Moment an little remain no lively',
      icon: <FaRocketchat />,
    },
  ],
  stories: [
    {
      title: 'Distrusts procuring oh frankness existence believing',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt magnam sint, culpa dicta voluptate, alias et quaerat omnis molestias eligendi ut ad ab a accusamus? Unde id nobis sit?',
    },
    {
      title: 'Square new horses and put better and Sincerity collected',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt magnam sint, culpa dicta voluptate, alias et quaerat omnis molestias eligendi ut ad ab a accusamus? Unde id nobis sit?',
    },
    {
      title: 'Front no party young abode state up Saved he do fruit woody',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt magnam sint, culpa dicta voluptate, alias et quaerat omnis molestias eligendi ut ad ab a accusamus? Unde id nobis sit?',
    },
  ],
  pricings: [
    {
      type: 'Trial Version',
      cost: 'FREE',
      features: [
        'Demo File',
        'Update',
        'File Compressed',
        'Commercial Use',
        'Support',
        '2 Database',
        'Documentation',
      ],
      btn: ' Try For Free',
    },

    {
      type: 'Regular',
      cost: '$29/ Year',
      features: [
        'Demo File',
        'Update',
        'File Compressed',
        'Commercial Use',
        'Support',
        '2 Database',
        'Documentation',
      ],
      btn: 'Get Started',
    },

    {
      type: 'Extended',
      cost: '$59/ Year',

      features: [
        'Demo File',
        'Update',
        'File Compressed',
        'Commercial Use',
        'Support',
        '2 Database',
        'Documentation',
      ],
      btn: 'Get Started',
    },
  ],
  reviews: [
    {
      name: 'Aslan Kumarov',
      job: 'CEO',
      img: Aslan,
      review:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident debitis animi deleniti unde perspiciatis quasi, magni sit inventore quidem. Repudiandae vel placeat repellendus magnam earum molestiae deleniti iusto enim exercitationem?',
    },
    {
      name: 'Mouha Diouf',
      job: 'Developer',
      img: Shams,
      review:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quas eius voluptate nihil blanditiis odit! Vitae culpa quos quae aliquam?',
    },
    {
      name: 'Craig Fisher',
      job: 'Manager',
      img: Craig,
      review:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam quas eius voluptate nihil blanditiis odit! Vitae culpa quos quae aliquam?',
    },
  ],
};

export default data;
