# %% 3.1
nat = "ip	nat	inside	source	list	ACL	interface	FastEthernet0/1	overload" 
print(nat)
nat = nat.replace('Fast', 'Gigabit') 
print(nat)

# %% 3.2
mac	= 'AAAA:BBBB:CCCC'
print(mac)
mac = mac.replace(':', '.')
print(mac)

# %% 3.3
config = 'switchport	trunk	allowed	vlan	1,3,10,20,30,100'
print(config)
print(config.split()[-1].split(','))

# %% 3.4
command1 = 'switchport	trunk	allowed	vlan	1,3,10,20,30,100'
command2 = 'switchport	trunk	allowed	vlan	1,3,100,200,300'
print(command1)
print(command2)
com1 = set(command1.split()[-1].split(','))
com2 = set(command2.split()[-1].split(','))
answer = [int(i) for i in com1 & com2]
print(sorted(answer))

# %% 3.5
vlans = [10, 20, 30, 1, 2, 100, 10, 30, 3, 4, 10]
print(vlans)
print(sorted(set(vlans)))

# %% 3.6
ospf_route = 'OSPF 10.0.24.0/24 [110/41] via 10.0.13.3, 3d18h, FastEthernet0/0'
print(ospf_route, '- '*32, sep='\n')
values = ospf_route.split()
values.remove(values[3])
values[2] = values[2][1:-1]
names = ['Protocol:', 'Prefix:', 'AD/Metric:', 'Next-Hop:', 'Last update:', 'Outbound Interface:']
out = ["{:20s} {:15s}".format(n, v) for n, v in zip(names, values)]
print('\n'.join(out))

# %% 3.7
mac	= 'AAAA:BBBB:CCCC'
mac = mac.split(':')
answer = [bin(int(i, 16))[2:] for i in mac]
print(' '.join(answer))

# %% 3.8
ip = '192.168.3.1'
ip = ip.split('.')
ip = ["{:<10}".format(i) for i in ip]
ip2 = ["{:010d}".format(int(bin(int(i))[2:])) for i in ip]
print(' '.join(ip))
print(' '.join(ip2))

# %% 3.9
num_list = [10,	2,	30,	100,	10,	50,	11,	30,	15,	7]
word_list = ['python',	'ruby',	'perl',	'ruby',	'perl',	'python',	'ruby',	'perl']
print(len(num_list) - num_list[::-1].index(30) - 1)
print(len(word_list) - word_list[::-1].index('python') - 1)

