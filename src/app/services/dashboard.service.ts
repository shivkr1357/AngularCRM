import { Injectable } from '@angular/core';
import { Leaderboard, Status } from '../interfaces/leaderboard.interface';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private leaderboard: Leaderboard[] = [
    {
      id: 1,
      rank: 1,
      image: 'https://i.pravatar.cc/150?img=1',
      name: 'John Smith',
      agency: 'ABC Insurance',
      leads: 45,
      conversion: '68%',
      revenue: 125000,
      status: Status.active,
    },
    {
      id: 2,
      rank: 2,
      image: 'https://i.pravatar.cc/150?img=2',
      name: 'Sarah Johnson',
      agency: 'XYZ Insurance',
      leads: 38,
      conversion: '72%',
      revenue: 112000,
      status: Status.inactive,
    },
    {
      id: 3,
      rank: 3,
      image: 'https://i.pravatar.cc/150?img=3',
      name: 'Michael Brown',
      agency: '123 Insurance',
      leads: 32,
      conversion: '65%',
      revenue: 98000,
      status: Status.inactive,
    },
    {
      id: 4,
      rank: 4,
      image: 'https://i.pravatar.cc/150?img=4',
      name: 'Emily Davis',
      agency: 'Best Insurance',
      leads: 29,
      conversion: '70%',
      revenue: 89000,
      status: Status['on leave'],
    },
    {
      id: 5,
      rank: 5,
      image: 'https://i.pravatar.cc/150?img=5',
      name: 'David Wilson',
      agency: 'Top Insurance',
      leads: 27,
      conversion: '63%',
      revenue: 82000,
      status: Status.active,
    },
    {
      id: 6,
      rank: 6,
      image: 'https://i.pravatar.cc/150?img=6',
      name: 'Lisa Anderson',
      agency: 'Prime Insurance',
      leads: 25,
      conversion: '67%',
      revenue: 78000,
      status: Status.inactive,
    },
    {
      id: 7,
      rank: 7,
      image: 'https://i.pravatar.cc/150?img=7',
      name: 'James Taylor',
      agency: 'Elite Insurance',
      leads: 23,
      conversion: '64%',
      revenue: 72000,
      status: Status.active,
    },
    {
      id: 8,
      rank: 8,
      image: 'https://i.pravatar.cc/150?img=8',
      name: 'Jennifer Martinez',
      agency: 'Super Insurance',
      leads: 21,
      conversion: '69%',
      revenue: 68000,
      status: Status.inactive,
    },
  ];
  constructor() {}

  getAllLeaderboardData(): Leaderboard[] {
    return this.leaderboard;
  }

  getLeaderboardDataWithId(id: number): Leaderboard | undefined {
    return this.leaderboard.find((item) => item.id === id);
  }
}
