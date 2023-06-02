### GET
Server Hostname:        127.0.0.1
Server Port:            3000

Document Path:          /titles
Document Length:        1820244 bytes

Concurrency Level:      10
- Time taken for tests:   10.084 seconds
- Complete requests:      412
Failed requests:        0
Total transferred:      759643108 bytes
HTML transferred:       759538700 bytes
- Requests per second:    40.86 [#/sec] (mean)
- Time per request:       244.764 [ms] (mean)
Time per request:       24.476 [ms] (mean, across all concurrent requests)
Transfer rate:          73564.06 [Kbytes/sec] received

Percentage of the requests served within a certain time (ms)
  50%    237
  66%    240
  75%    243
  80%    246
  90%    255
  95%    265
  98%    276
  99%    279
 100%    282 (longest request)

 ### POST
 Concurrency Level:      10
- Time taken for tests:   13.486 seconds
- Complete requests:      16278
Failed requests:        1644
   (Connect: 0, Receive: 0, Length: 1644, Exceptions: 0)
Total transferred:      7111649 bytes
Total body sent:        4135374
HTML transferred:       3123539 bytes
- Requests per second:    1207.00 [#/sec] (mean)
- Time per request:       8.285 [ms] (mean)
Time per request:       0.829 [ms] (mean, across all concurrent requests)
Transfer rate:          514.96 [Kbytes/sec] received
                        299.45 kb/s sent
                        814.41 kb/s total

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.8      0      30
Processing:     1    4   2.5      3      49
Waiting:        0    4   2.3      3      48
Total:          1    4   2.6      3      49

Percentage of the requests served within a certain time (ms)
  50%      3
  66%      4
  75%      4
  80%      5
  90%      7
  95%      8
  98%     10
  99%     12
 100%     49 (longest request)

 ### PUT

Concurrency Level:      10
- Time taken for tests:   10.127 seconds
- Complete requests:      7629
Failed requests:        0
Total transferred:      2167488 bytes
Total body sent:        1747728
HTML transferred:       343440 bytes
- Requests per second:    753.36 [#/sec] (mean)
- Time per request:       13.274 [ms] (mean)
Time per request:       1.327 [ms] (mean, across all concurrent requests)
Transfer rate:          209.02 [Kbytes/sec] received
                        168.54 kb/s sent
                        377.56 kb/s total

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    5 134.3      0    3717
Processing:     1    8  21.2      6     555
Waiting:        1    8  20.7      6     554
Total:          1   13 136.6      6    3747

Percentage of the requests served within a certain time (ms)
  50%      6
  66%      7
  75%      9
  80%     10
  90%     13
  95%     16
  98%     20
  99%     24
 100%   3747 (longest request)
