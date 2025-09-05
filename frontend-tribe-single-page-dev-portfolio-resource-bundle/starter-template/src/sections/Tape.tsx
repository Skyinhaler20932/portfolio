import Image from "next/image";
import DockerIcon from '@/assets/icons/minidocker.svg';
import K8sIcon from '@/assets/icons/minikubernetes.svg';
import AnsibleIcon from '@/assets/icons/miniansible.svg';
import TerraIcon from '@/assets/icons/miniTerraform.svg';
import CiIcon from '@/assets/icons/minicicd.svg';
import SonarIcon from '@/assets/icons/minishield.svg';
import AgileIcon from '@/assets/icons/miniAgile.svg';
import ScaleIcon from '@/assets/icons/miniScale.svg';
import ContIcon from '@/assets/icons/miniCD.svg';
import LogIcon from '@/assets/icons/miniLog.svg';
import TimeIcon from '@/assets/icons/miniOnTime.svg';
import { Fragment } from "react";


const words = [
  { label: "Docker", icon: DockerIcon },
  { label: "K8s", icon: K8sIcon },
  { label: "Ansible", icon: AnsibleIcon },
  { label: "Terraform", icon: TerraIcon },
  { label: "CI/CD", icon: CiIcon },
  { label: "SAST", icon: SonarIcon },
  { label: "Agile", icon: AgileIcon },
  { label: "Scalability", icon: ScaleIcon },
  { label: "Continuous Delivery", icon: ContIcon },
  { label: "Logging", icon:LogIcon },
  { label: "OnTime Handling", icon:TimeIcon},
];












export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:35s]">
            {[...new Array(2)].fill(0).map((_,idx) =>(
              <Fragment key={idx}>
            {words.map((word) => (
              <div key={word.label} className="inline-flex gap-4 items-center">
                <word.icon className="h-6 w-6 text-gray-900 -rotate-12" />
                <span className="text-gray-900 font-extrabold text-sm">{word.label}</span>
              </div>
            ))}

            </Fragment>

            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

