import { h, Component, Color, Text, Bold } from "ink";
import Box from "ink-box";
import Image from "ink-image";
import path from "path";
import SelectInput from "ink-select-input";
import Table from "ink-table";

function onSelect(item) {
    if (item.action) {
        item.action();
    }
}

const avatar = path.join(__dirname, "../mattmezza.jpg");

const items = [
    {
        label: 'Quit',
        action() {
            process.exit();
        }
    }
];

const data = [
    {
        site: "GitHub",
        url: "https://github.com/mattmezza",
    },
    {
        site: "Website",
        url: "https://matteo.merola.co",
    },
    {
        site: "LinkedIn",
        url: "https://www.linkedin.com/in/matteomerola",
    },
    {
        site: "Facebook",
        url: "https://www.facebook.com/matteo.merola",
    },
    {
        site: "Twitter",
        url: "https://twitter.com/_mattmezza_",
    },
    {
        site: "Skype",
        url: "skype://matteomerola?call",
    },
    {
        site: "Phone",
        url: "tel://+393409341277",
    },
    {
        site: "Telegram",
        url: "https://telegram.me/mattmezza",
    },
    {
        site: "Instagram",
        url: "https://instagram.com/chiamamimatt",
    },
    {
        site: "SoundCloud",
        url: "https://soundcloud.com/OfficialMatt",
    },
];

export default () => (
    <div>
        <br />
        <div>
            <Image preserveAspectRatio src={avatar} width='20' />
        </div>
        <Box borderColor="cyan" padding={2}>
            <div>
                <Bold>Matteo Merola</Bold><Text> | @mattmezza</Text>
            </div>
            <div>Software Engineer</div>
            <div>
                Get in touch at <Color cyan>mattmezza@gmail.com</Color>
            </div>
            <br />
            <Table data={data} />
            <div>
                $ npx mattmezza
            </div>
        </Box>
        <br /><br />
        <div>
            <SelectInput items={items} onSelect={onSelect} />
        </div>
    </div>
);;
