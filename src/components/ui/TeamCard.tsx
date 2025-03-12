interface TeamProps {
  team: {
    id: number;
    name: string;
    division: string;
    conference: string;
    year: string;
    logo: string;
  };
}

export const TeamCard = ({ team }: TeamProps) => {
  return (
    <div>
      <div className="bg-gradientGray rounded-t text-center py-12">
        <img src={team.logo} alt={team.name} className="sm:w-36 sm:h-36 w-16 h-16 mx-auto" />
      </div>
      <div className="bg-dark text-center px-2 py-4 sm:py-6 rounded-b h-24 flex flex-col gap-2 justify-center">
        <div key={team.id} className="text-sm text-white font-bold">
          {team.name}
        </div>
        <div className="text-xs text-lightGray">Year of foundation: {team.year}</div>
      </div>
    </div>
  );
};
