import { useNavigate } from "react-router";

type Props = {};

export default function Navigation({}: Props) {
  const navigate = useNavigate();
  return (
    <div>
      <div className=' w-fit ml-auto mr-auto rounded mb-12'>
        <button
          className='bg-transparent '
          onClick={() => navigate("/Conflicts")}
        >
          <svg
            width='36'
            height='36'
            viewBox='0 0 86 86'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='42.6794'
              cy='42.8144'
              r='40.4902'
              stroke='#F14924'
              stroke-opacity='0.3'
              stroke-width='4'
            />
            <circle
              cx='42.6793'
              cy='42.8143'
              r='30.6087'
              stroke='#F14924'
              stroke-opacity='0.7'
              stroke-width='4'
            />
            <circle
              cx='42.6793'
              cy='42.8143'
              r='20.2332'
              stroke='#F14924'
              stroke-opacity='0.9'
              stroke-width='4'
            />
          </svg>
        </button>
        <button
          className='bg-transparent'
          onClick={() => navigate("/Potential")}
        >
          <svg
            width='36'
            height='36'
            viewBox='0 0 86 86'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='42.6608'
              cy='42.8144'
              r='40.4902'
              stroke='#FFBE00'
              stroke-opacity='0.3'
              stroke-width='4'
            />
            <circle
              cx='42.661'
              cy='42.8143'
              r='30.6087'
              stroke='#FFBE00'
              stroke-opacity='0.7'
              stroke-width='4'
            />
            <circle
              cx='42.661'
              cy='42.8143'
              r='20.2332'
              stroke='#FFBE00'
              stroke-opacity='0.9'
              stroke-width='4'
            />
          </svg>
        </button>
        <button className='bg-transparent' onClick={() => navigate("/Events")}>
          <svg
            width='36'
            height='36'
            viewBox='0 0 86 86'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='42.6977'
              cy='42.8144'
              r='40.4902'
              stroke='#87D7EE'
              stroke-opacity='0.3'
              stroke-width='4'
            />
            <circle
              cx='42.6978'
              cy='42.8143'
              r='30.6087'
              stroke='#87D7EE'
              stroke-opacity='0.7'
              stroke-width='4'
            />
            <circle
              cx='42.6978'
              cy='42.8143'
              r='20.2332'
              stroke='#87D7EE'
              stroke-opacity='0.9'
              stroke-width='4'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
