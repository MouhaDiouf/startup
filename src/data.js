import { BsFillChatDotsFill } from 'react-icons/bs';
import { FaRocket, FaDev, FaRocketchat } from 'react-icons/fa';
import { GoProject } from 'react-icons/go';
import { SiPaloaltosoftware } from 'react-icons/si';
import { FcCustomerSupport } from 'react-icons/fc';
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
};

export default data;
