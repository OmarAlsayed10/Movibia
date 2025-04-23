export interface Movie {
        id: number;
        title: string;
        poster_path: string;
        release_date: string;
        overview: string;
        adult: boolean;
        vote_average:number;
        popularity:number;
    }

    export interface watchList{
        userId:number;
        movieId:number;
        movie:[];
    }

    export interface userState{
        loggedIn:boolean,
        loading:boolean,
        error:string|null
    }

    export interface MovieWatchList{
        id:number,
        title:string,
    }
    
    export interface WatchlistState {
        items: Movie[];
        loading: boolean;
        error: string | null;
      }
    
    export interface AddToWatchlistPayload {
        userId: number;
        movie: Movie;
      }

      export interface getWatchListPayLoad{
        userId:number;
      }
      
      export interface RemoveFromWatchlistPayload {
        userId: number;
        movieId: number;
      }
