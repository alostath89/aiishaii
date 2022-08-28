import React from 'react'
import { Menu } from 'antd';
import Link from 'next/link'

const categoryListChildren = [
    {
        label: (<Link href="/filter"><a>audio & speakers</a></Link>)
    },
    {
        label: (<Link href="/filter"><a>cell phones & accessories</a></Link>)
    },
    {
        label: (<Link href="/filter"><a>cameras & photography</a></Link>)
    },
    {
        label: (<Link href="/filter"><a>tv & media players</a></Link>)
    },
    {
        label: (<Link href="/filter"><a>video games & consoles</a></Link>)
    },
    {
        label: (<Link href="/filter"><a>computers & accessories</a></Link>)
    },
    {
        label: (<Link href="/filter"><a>books, movies & music</a></Link>)
    },
    {
        label: (<Link href="/filter"><a>wearables</a></Link>)
    },
    {
        label: (<Link href="/filter"><a>drones</a></Link>)
    },
    {
        label: (<Link href="/filter"><a>virtual reality</a></Link>)
    },
    {
        label: (<Link href="/filter"><a>other - electronics & media</a></Link>)
    }
  ];

const categoryList = [
    {
        label: (<Link href="/filter"><a><img src="/category-icon-2.svg" /> Home & Garden</a></Link>),
      },
      {
          label: (<a><img src="/category-icon-3.svg" /> Clothing, Shoes & Accessories</a>),
          children: categoryListChildren
      },
      {
          label: (<Link href="/filter"><a><img src="/category-icon-4.svg" /> Baby & Kids</a></Link>),
      },
      {
          label: (<Link href="/filter"><a><img src="/category-icon-5.svg" /> Vehicles</a></Link>),
      },
      {
          label: (<Link href="/filter"><a><img src="/category-icon-6.svg" /> Toys, Games & Hobbies</a></Link>),
      },
      {
          label: (<Link href="/filter"><a><img src="/category-icon-7.svg" /> Collectibles & Art</a></Link>),
          
      },
      {
          label: (<Link href="/filter"><a><img src="/category-icon-2.svg" /> Pet supplies</a></Link>),
      },
      {
          label: (<Link href="/filter"><a><img src="/category-icon-7.svg" /> Collectibles & Art</a></Link>),
          
      },
      {
          label: (<Link href="/filter"><a><img src="/category-icon-2.svg" /> Pet supplies</a></Link>),
      }
  ];

  const CategoryNav = () => {
    return (
        <section className="categoryList">

            <Menu
                mode="horizontal"
                items={categoryList.map((val, index) => {
                const key = index + 1;
                return {
                    key: 'nav'+key,
                    label: val.label,
                    icon: val.icon,
                    disabled: val.disabled,
                    children: val.children
                };
                })}
            />

        </section>
    )
}

export default CategoryNav
