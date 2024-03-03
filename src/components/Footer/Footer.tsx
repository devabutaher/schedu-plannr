import {
  companyResources,
  generalInformation,
  policiesAndLegal,
  specialProgramsAndNotifications,
} from "@/data/footerData";
import { Star } from "lucide-react";
import { FaDiscord, FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <div className="p-8 my-8 space-y-8 border-2 rounded-2xl border-primary">
      <div className="space-y-4 w-full max-w-[20rem]">
        <div className="w-[14rem]">
          <img src="/logo.png" alt="logo" className="w-full" />
        </div>

        <p className="text-primary">
          ScheduPlannr® is a registered trademark by ScheduPlannr, Inc. All
          rights reserved.
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <Icon title="Start" icon={<Star size={14} />} />
          <Icon icon={<FaGithub size={14} />} />
          <Icon icon={<FaXTwitter size={14} />} />
          <Icon icon={<FaDiscord size={14} />} />
          <Icon icon={<FaYoutube size={14} />} />
        </div>

        <p className="text-slate-500">
          Our mission is to connect a billion people by 2031 through calendar
          scheduling.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <Column title="General" infoData={generalInformation} />
        <Column title="Resources" infoData={companyResources} />
        <Column title="Policies" infoData={policiesAndLegal} />
        <Column title="Programs" infoData={specialProgramsAndNotifications} />
      </div>
    </div>
  );
};

const Column = ({
  title,
  infoData,
}: {
  title: string;
  infoData: { link: string; id: number; title: string }[];
}) => {
  return (
    <div className="flex flex-col gap-1">
      <Button variant="secondary" className="text-lg uppercase">
        {title}
      </Button>

      {infoData.map((data) => (
        <Link to={data.link} key={data.id}>
          <Button variant="link" className="text-lg">
            {data.title}
          </Button>
        </Link>
      ))}
    </div>
  );
};

const Icon = ({ title, icon }: { title?: string; icon: React.ReactNode }) => {
  return (
    <Button
      className="flex items-center gap-1 text-sm font-normal"
      size="sm"
      variant="secondary"
    >
      {icon}
      {title}
    </Button>
  );
};

export default Footer;
